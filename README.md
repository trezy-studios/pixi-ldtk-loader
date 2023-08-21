# `pixi-ldtk-loader`

> **Import [LDtk](https://ldtk.io/) files directly into your [Pixi.js](https://pixijs.com/) project.**

[LDtk](https://ldtk.io/) is an excellent tool for building expansive 2D worlds, which also makes it an amazing candidate for building your Pixi.js levels. This project makes it dead simple to import your raw `.ldtk` files directly into Pixi.js.

When loading your `.ldtk` files, the loader will automatically create sprites and spritesheets for your LDtk tilesets. It'll also generate an easy-to-parse object representing the entire file, making it easy to access all of your levels, layers, enums, entities, and custom properties.

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
