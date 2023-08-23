# `pixi-ldtk-loader`

> **Import [LDtk](https://ldtk.io/) files directly into your [Pixi.js](https://pixijs.com/) project.**

[![Version][version-badge]][package]
[![BSD-3-Clause License][license-badge]][license]
[![Downloads][downloads-badge]][npmtrends]
[![Bundle size][bundlephobia-badge]][bundlephobia]

<!-- [![Code Coverage][coveralls-badge]][coveralls] -->

[![Build status][build-status-badge]][build-status]
[![Dependencies][libraries.io-badge]][libraries.io]
[![Maintainability][codeclimate-badge]][codeclimate]
[![Code of Conduct][code-of-conduct-badge]][code-of-conduct]
<!-- [![PRs Welcome][prs-badge]][prs] -->

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

[LDtk](https://ldtk.io/) is an excellent tool for building expansive 2D worlds, which also makes it an amazing candidate for building your Pixi.js levels. This project makes it dead simple to import your raw `.ldtk` files directly into Pixi.js.

When loading your `.ldtk` files, the loader will automatically create spritesheets and textures for your LDtk tilesets. It'll also generate an easy-to-parse object representing the entire file, making it easy to access all of your levels, layers, enums, entities, and custom properties.

## Quick Start

### Requirements

* `@pixi/assets` @ 7.2.4+
* `@pixi/core` @ 7.2.4+
* `@pixi/spritesheet` @ 7.2.4+
* `@pixi/utils` @ 7.2.4+
* [LDtk](https://ldtk.io) 1.3.3+

### Installation

```bash
npm install pixi-ldtk-loader

# OR

yarn add pixi-ldtk-loader
```

### Usage

The loader can be used directly:

```js
import { LDTKLoader } from 'pixi-ldtk-loader'

const loader = new LDTKLoader()
loader.add('path/to/project.ldtk')
loader.load(() => {})
```

Or it can be used as an Application level extension:

```js
import {
  Application,
  extensions,
} from 'pixi.js'
import { LDTKLoader } from 'pixi-ldtk-loader'

extensions.add(LDTKLoader)

const app = new Application()
app.loader.add('path/to/project.ldtk')
app.loader.load(() => {})
```

### Rendering the map

The loader will create spritesheets and textures for your project, but due to the wide range of differences between rendering pipelines and personal preferences the loader **will not** render your levels for you. Rather, you'll need to write your own parser to render the project.

Assuming we've used the loader to load a project titled `game-project.ldtk`, here's an example of rendering all levels and layers at once. Keep in mind that for larger worlds you may want to render levels selectively based on the camera's current position.

```js
import { Assets } from '@pixi/assets'

const app = new PIXI.Application()

// We'll use this cache to use a single container for each layer, regardless of
// which level the layer's tiles belong to. This makes it simple to, for
// example, render your player on your Entities layer, moving its sprite
// smoothly across levels screen without having to reparent it to a new
// container.
const layerCache = {}

// Since we're only rendering the levels, we'll destructure only the `levels`
// array from the map's data.
const { levels } = Assets.get('game-project.ldtk')

levels.forEach(level => {
  // We'll destructure the `layers` array from the level since it's the only key
  // we need for rendering.
  const { layers } = level

  layers.forEach(layer => {
    // Skip all parsing if the layer has no tiles.
    if (layer.tiles?.length) {
      // Retrieve the layer's Pixi container from the cache if it exists...
      let layerContainer = layerCache[layer.name]

      // ...or create a new container and store it in the cache..
      if (!layerContainer) {
        layerContainer = new Container
        layerContainer.name = layer.name
        layerCache[layer.name] = layerContainer
      }

      layer.tiles.forEach(tile => {
        // We create a tile object for every tile, regardless of whether they
        // have a texture applied. If they have no texture, tho, then we have
        // nothing to render.
        if (!tile?.texture) return

        // Create a new sprite for every tile. If your tiles don't need to be
        // adjusted individually, it'd probably be better to use
        // `@pixi/tilemap`.
        const sprite = new Sprite(tile.texture)

        // Position the Sprite in screen space using its position in the level,
        // adjusted by the level's world offset.
        sprite.x = (tile.position.x * tile.width) + level.worldPosition.x
        sprite.y = (tile.position.y * tile.height) + level.worldPosition.y

        // Add the tile's Sprite to the layer's Container.
        layerContainer.addChild(sprite)
      })
    }

    // Add the layer's container to the application stage.
    app.stage.addChild(layerContainer)
  })

  return targetContainer
})
```





[bundlephobia]: https://bundlephobia.com/result?p=pixi-ldtk-loader
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/pixi-ldtk-loader.svg?style=flat-square
[build-status]: https://github.com/trezy-studios/pixi-ldtk-loader/actions
[build-status-badge]: https://img.shields.io/github/actions/workflow/status/trezy-studios/pixi-ldtk-loader/release.yml?style=flat-square
[code-of-conduct]: CODE_OF_CONDUCT.md
[code-of-conduct-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[codeclimate]: https://codeclimate.com/github/trezy-studios/pixi-ldtk-loader
[codeclimate-badge]: https://img.shields.io/codeclimate/maintainability/trezy-studios/pixi-ldtk-loader.svg?style=flat-square
[coveralls]: https://coveralls.io/github/trezy-studios/pixi-ldtk-loader
[coveralls-badge]: https://img.shields.io/coveralls/trezy-studios/pixi-ldtk-loader.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/pixi-ldtk-loader.svg?style=flat-square
[github-watch]: https://github.com/trezy-studios/pixi-ldtk-loader/watchers
[github-watch-badge]: https://img.shields.io/github/watchers/trezy-studios/pixi-ldtk-loader.svg?style=social
[github-star]: https://github.com/trezy-studios/pixi-ldtk-loader/stargazers
[github-star-badge]: https://img.shields.io/github/stars/trezy-studios/pixi-ldtk-loader.svg?style=social
[libraries.io]: https://libraries.io/npm/pixi-ldtk-loader
[libraries.io-badge]: https://img.shields.io/librariesio/release/npm/pixi-ldtk-loader.svg?style=flat-square
[license]: LICENSE
[license-badge]: https://img.shields.io/npm/l/pixi-ldtk-loader.svg?style=flat-square
[npmtrends]: https://www.npmtrends.com/pixi-ldtk-loader
[package]: https://npmjs.com/package/pixi-ldtk-loader
[prs]: CONTRIBUTING.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/pixi-ldtk-loader.svg?style=flat-square
