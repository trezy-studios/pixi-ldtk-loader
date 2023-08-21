# `pixi-ldtk-loader`

> **Import [LDtk](https://ldtk.io/) files directly into your [Pixi.js](https://pixijs.com/) project.**

[LDtk](https://ldtk.io/) is an excellent tool for building expansive 2D worlds, which also makes it an amazing candidate for building your Pixi.js levels. This project makes it dead simple to import your raw `.ldtk` files directly into Pixi.js.

When loading your `.ldtk` files, the loader will automatically create spritesheets and textures for your LDtk tilesets. It'll also generate an easy-to-parse object representing the entire file, making it easy to access all of your levels, layers, enums, entities, and custom properties.

## Quick Start

### Requirements

* `@pixi/assets` @ 7.2.4+
* `@pixi/core` @ 7.2.4+
* `@pixi/spritesheet` @ 7.2.4+
* `@pixi/utils` @ 7.2.4+

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
