declare const __filename: string;

interface rect {
  /**
   * X coordinate of the rectangle.
   */
  x: number;

  /**
   * Y coordinate of the rectangle.
   */
  y: number;

  /**
   * Width of the rectangle.
   */
  width: number;

  /**
   * Height of the rectangle.
   */
  height: number;
}

interface region {
  /**
   * Bounding rectangle of the region.
   */
  readonly boundingRect: rect;
}

interface point {
  /**
   * X coordinate of the point.
   */
  x: number;

  /**
   * Y coordinate of the point.
   */
  y: number;
}

interface size {
  width: number;
  height: number;
}

type Polygon = point[];

interface ObjectRef {
    id: number;
}

interface Menu {
  /**
   * ID of a registered action that the menu item will represent.
   */
  action: string;

  /**
   * ID of the action before which this menu item should be added
   * (optional).
   */
  before: string;

  /**
   * Set to `true` if this item is a menu separator (optional).
   */
  separator: boolean;
}

interface FilePath {
  url: string;
}

interface Signal<Arg> {
  connect(callback: (arg: Arg) => void): void;
  disconnect(callback: (arg: Arg) => void): void;
}

declare namespace Qt {
  export function point(x: number, y: number): point;
  export function rect(
    x: number,
    y: number,
    width: number,
    height: number
  ): rect;

  type Alignment = number;

  const AlignLeft: Alignment;
  const AlignRight: Alignment;
  const AlignVCenter: Alignment;
  const AlignHCenter: Alignment;
  const AlignJustify: Alignment;
  const AlignTop: Alignment;
  const AlignBottom: Alignment;
  const AlignCenter: Alignment;
}

declare namespace TextFile {
  export const ReadOnly = 1;
  export const WriteOnly = 2;
  export const ReadWrite = 3;
  export const Append = 4;

  type OpenMode =
    | typeof ReadOnly
    | typeof WriteOnly
    | typeof ReadWrite
    | typeof Append;
}

/**
 * The `TextFile` object is used to read and write files in text mode.
 *
 * When using `TextFile.WriteOnly`, you need to call {@link TextFile#commit()} when you’re
 * done writing otherwise the operation will be aborted without effect.
 */
declare class TextFile {
  /**
   * The path of the file.
   */
  public readonly filePath: string;

  /**
   * True if no more data can be read.
   */
  public readonly atEof: boolean;

  /**
   * The text codec.
   */
  public codec: string;

  /**
   * Opens a text file in the given mode.
   */
  constructor(filePath: string, mode?: BinaryFile.OpenMode);

  /**
   * Reads one line of text from the file and returns it. The returned string does not contain the
   * newline characters.
   */
  public readLine(): string;

  /**
   * Reads all data from the file and returns it.
   */
  public readAll(): string;

  /**
   * Truncates the file, that is, gives it the size of zero, removing all content.
   */
  public truncate(): void;

  /**
   * Writes a string to the file.
   * @param text
   */
  public write(text: string): void;

  /**
   * Writes a string to the file and appends a newline character.
   * @param text
   */
  public writeLine(text: string): void;

  /**
    * Commits all written text to disk and closes the file. Should be called when writing to files in WriteOnly mode. Failing to call this function will result in cancelling the operation, unless safe writing to files is disabled.
    */
  public commit(): void;

  /**
    * Closes the file. It is recommended to always call this function as soon as you are finished with the file.
    */
  public close(): void;
}

declare namespace BinaryFile {
  export const ReadOnly = 1;
  export const WriteOnly = 2;
  export const ReadWrite = 3;

  type OpenMode = typeof ReadOnly | typeof WriteOnly | typeof ReadWrite;
}

/**
 * The `BinaryFile` object is used to read and write files in binary mode.
 *
 * When using `BinaryFile.WriteOnly`, you need to call {@link BinaryFile#commit()} when you’re
 * done writing otherwise the operation will be aborted without effect.
 */
declare class BinaryFile {
  /**
   * The path of the file.
   */
  public readonly filePath: string;
  /**
   * True if no more data can be read.
   */
  public readonly atEof: boolean;
  /**
   * The size of the file (in bytes).
   */
  public size: number;
  /**
   * The position that data is written to or read from.
   */
  public pos: number;

  /**
   * Opens a binary file in the given mode.
   */
  constructor(filePath: string, mode?: BinaryFile.OpenMode);

  /**
   * Sets the file size (in bytes). If `size` is larger than the file currently is, the new bytes
   * will be set to 0; if `size` is smaller, the file is truncated.
   * @param size
   */
  public resize(size: number): void;

  /**
   * Sets the current position to `pos`.
   * @param pos
   */
  public seek(pos: number): void;

  /**
   * Reads at most `size` bytes of data from the file and returns it as an {@link ArrayBuffer}.
   * @param size
   */
  public read(size: number): ArrayBuffer;

  /**
   * Reads all data from the file and returns it as an {@link ArrayBuffer}.
   */
  public readAll(): ArrayBuffer;

  /**
   * Commits all written data to disk and closes the file. Should be called when writing to files
   * in WriteOnly mode. Failing to call this function will result in cancelling the operation,
   * unless safe writing to files is disabled.
   * @param data
   */
  public write(data: ArrayBuffer): void;

  /**
   * Closes the file. It is recommended to always call this function as soon as you are finished
   * with the file.
   */
  public close(): void;
}

/**
 * An action that was registered with {@see tiled.registerAction}.
 *
 * This class is used to change the properties of the action.
 * It can be added to a menu using {@see tiled.extendMenu}.
 */
interface Action {
  /**
   * The ID this action was registered with.
   * @readonly
   */
  id: string;

  /**
   * The text used when the action is part of a menu.
   */
  text: string;

  /**
   * Whether the action is checked.
   */
  checked: boolean;

  /**
   * Whether the action can be checked.
   */
  checkable: boolean;

  /**
   * Whether the action is enabled.
   */
  enabled: boolean;

  /**
   * File name of an icon.
   */
  icon: string;

  /**
   * Whether the action should show an icon
   * in a menu.
   */
  iconVisibleInMenu: boolean;

  /**
   * The shortcut (can be assigned a string like "Ctrl+K").
   */
  shortcut: string;

  /**
   * Whether the action is visible.
   */
  visible: boolean;

  /**
   * Triggers the action.
   */
  trigger(): void;

  /**
   * Changes the checked state to its opposite state.
   */
  toggle(): void;
}

declare class ObjectGroup {

}

/**
 * The base of most data types in Tiled. Provides the ability to associate
 * custom properties with the data.
 */
declare class TiledObject {
  /**
   * The asset this object is part of, or `null`.
   */
  readonly asset: Asset;

  /**
   * Whether the object is read-only.
   */
  readonly readOnly: boolean;

  /**
   * Returns the value of the custom property with the given name, or
   * `undefined` if no such property is set on the object. Does not
   * include inherited values (see {@see resolvedProperty}).
   *
   * `file` properties are returned as {@see FilePath}.
   *
   * `object` properties are returned as {@see MapObject} when possible,
   * or {@see ObjectRef} when the object could not be found.
   */
  property(name: string): any;

  /**
   * Sets the value of the custom property with the given name. Supported
   * types are `bool`, `number`, `string`, {@see FilePath},
   * {@see ObjectRef} and {@see MapObject}.
   *
   * When setting a `number`, the property type will be set to either
   * `int` or `float`, depending on whether it is a whole number.
   *
   * *Note:* Support for setting `color` properties is currently missing.
   */
  setProperty(name: string, value: any): void;

  /**
   * Returns all custom properties set on this object.
   *
   * Modifications to the properties will not affect the original object.
   * Does not include inherited values (see {@see resolvedProperties}).
   */
  properties(): Object;

  /**
   * Replaces all currently set custom properties with a new set of
   * properties.
   */
  setProperties(properties: Object): void;

  /**
   * Removes the custom property with the given name.
   */
  removeProperty(name: string): void;

  /**
   * Returns the value of the custom property with the given name, or
   * `undefined` if no such property is set. Includes values inherited
   * from object types, templates and tiles where applicable.
   */
  resolvedProperty(name: string): any;

  /**
   * Returns all custom properties set on this object. Modifications to
   * the properties will not affect the original object. Includes values
   * inherited from object types, templates and tiles where applicable.
   */
  resolvedProperties(): Object;
}


declare namespace MapObject {
  type ObjectShape = number;

  const Rectangle: ObjectShape;
  const Polygon: ObjectShape;
  const Polyline: ObjectShape;
  const Ellipse: ObjectShape;
  const Text: ObjectShape;
  const Point: ObjectShape;
}

declare class MapObject extends TiledObject {
  /**
   * Unique (map-wide) ID of the object.
   */
  readonly id: number;

  /**
   * {@see ObjectShape} of the object.
   */
  shape: MapObject.ObjectShape;

  /**
   * Name of the object.
   */
  name: string;

  /**
   * Type of the object.
   */
  type: string;

  /**
   * X coordinate of the object in pixels.
   */
  x: number;

  /**
   * Y coordinate of the object in pixels.
   */
  y: number;

  /**
   * Position of the object in pixels.
   */
  pos: point;

  /**
   * Width of the object in pixels.
   */
  width: number;

  /**
   * Height of the object in pixels.
   */
  height: number;

  /**
   * Size of the object in pixels.
   */
  size: size;

  /**
   * Rotation of the object in degrees clockwise.
   */
  rotation: number;

  /**
   *
   */
  visible: boolean;

  /**
   * Polygon of the object.
   */
  polygon: Polygon;

  /**
   * The text of a text object.
   */
  text: string;

  /**
   * The font of a text object.
   */
  font: string;

  /**
   * The alignment of a text object.
   */
  textAlignment: Qt.Alignment;

  /**
   * Whether the text of a text object
   * wraps based on the width of the object.
   */
  wordWrap: boolean;

  /**
   * Color of a text object.
   */
  textColor: string;

  /**
   * Tile of the object.
   */
  tile: string;

  /**
   * Whether the tile is flipped horizontally.
   */
  tileFlippedHorizontally: boolean;

  /**
   * Whether the tile is flipped vertically.
   */
  tileFlippedVertically: boolean;

  /**
   * Whether the object is selected.
   */
  selected: boolean;

  /**
   * Layer this object is part of (or `null` in case of a standalone
   * object).
   */
  layer: ObjectGroup;

  /**
   * Map this object is part of (or `null` in case of a
   * standalone object).
   */
  readonly map: TileMap;
}

/**
 * Inherits `script-object`{.interpreted-text role="ref"}.
 *
 * Represents any top-level data type that can be saved to a file.
 * Currently either a `script-map`{.interpreted-text role="ref"} or a
 * `script-tileset`{.interpreted-text role="ref"}.
 *
 * For assets that are loaded in the editor, all modifications and
 * modifications to their contained parts create undo commands. This
 * includes both modifying functions that are called as well as simply
 * assigning to a writable property.
 */
declare class Asset extends TiledObject {
  /**
   * File name of the asset.
   */
  readonly fileName: string;

  /**
   * Whether the asset was modified after it was saved or loaded.
   */
  readonly modified: boolean;

  /**
   * Whether the asset is a {@see TileMap}.
   */
  readonly isTileMap: boolean;

  /**
   * Whether the asset is a {@see Tileset}.
   */
  readonly isTileset: boolean;

  /**
   * Creates a single undo command that wraps all changes applied to this
   * asset by the given callback. Recommended to avoid spamming the undo
   * stack with small steps that the user does not care about.
   *
   * Example function that changes visibility of multiple layers in one
   * step:
   *
   * ```js
   * tileMap.macro((visible ? "Show" : "Hide") + " Selected Layers", function() {
   *     tileMap.selectedLayers.forEach(function(layer) {
   *         layer.visible = visible
   *     })
   * })
   * ```
   *
   * @returns The returned value is whatever the callback function returned.
   */
  macro<T>(text: string, callback: () => T): T;

  /**
   * Undoes the last applied change.
   *
   * Note that the undo system is only enabled for assets loaded
   * in the editor!
   */
  undo(): void;

  /**
   * Redoes the last change that was undone.
   *
   * Note that the undo system is only enabled for assets loaded
   * in the editor!
   */
  redo(): void;
}

/**
 * Common functionality for file format readers and writers.
 *
 * @since 1.4
 */
interface FileFormat {
  /**
   * Whether this format supports reading files.
   */
  readonly canRead: boolean;

  /**
   * Whether this format supports writing files.
   */
  readonly canWrite: boolean;

  /**
   * Returns whether the file is readable by this format.
   */
  supportsFile(fileName: string): boolean;
}

/**
 * Offers various operations on file paths, such as turning absolute paths
 * into relative ones, splitting a path into its components, and so on.
 */
interface FileInfo {
  /**
   * Returns the file name of `filePath` up to (but not including) the
   * first '.' character.
   */
  baseName(filePath: string): string;

  /**
   * Returns a canonicalized `filePath`, i.e. an absolute path without
   * symbolic links or redundant "." or ".." elements. On Windows,
   * drive substitutions are also resolved.
   *
   * It is recommended to use `canonicalPath` in only those cases where
   * canonical paths are really necessary. In most cases, `cleanPath`
   * should be enough.
   */
  canonicalPath(filePath: string): string;

  /**
   * Returns `filePath` without redundant separators and with resolved
   * occurrences of `.` and `..` components. For
   * instance, `/usr/local//../bin/` becomes `/usr/bin`.
   */
  cleanPath(filePath: string): string;

  /**
   * Returns the file name of `filePath` up to (but not including) the
   * last `.` character.
   */
  completeBaseName(filePath: string): string;

  /**
   * Returns the file suffix of `filePath` from (but not including) the
   * last `.` character.
   */
  completeSuffix(filePath: string): string;

  /**
   * Returns the last component of `filePath`, that is, everything after
   * the last `/` character.
   */
  fileName(filePath: string): string;

  /**
   * On Windows, returns `filePath` with all `\` characters replaced
   * by `/`. On other operating systems, it returns the input
   * unmodified.
   */
  fromNativeSeparators(filePath: string): string;

  /**
   * Returns true if `filePath` is an absolute path and false
   * if it is a relative one.
   */
  isAbsolutePath(filePath: string): boolean;

  /**
   * Concatenates the given paths using the `/` character.
   */
  joinPaths(...paths) : string;

  /**
   * Returns the part of `filePath` that is not the file name, that is,
   * everything up to (but not including) the last `/` character. If
   * `filePath` is just a file name, then `.` is returned. If
   * `filePath` ends with a `/` character, then the file name is
   * assumed to be empty for the purpose of the above definition.
   */
  path(filePath: string): string;

  /**
   * Returns the path to `filePath` relative to the directory `dirPath`.
   * If necessary, `..` components are inserted.
   */
  relativePath(dirPath: string, filePath: string): string;

  /**
   * Returns the file suffix of `filePath` from (but not including) the
   * first `.` character.
   */
  suffix(filePath: string): string;

  /**
   * On Windows, returns `filePath` with all `/` characters replaced by
   * `\`. On other operating systems, it returns the input
   * unmodified.
   */
  toNativeSeparators(filePath: string): string;
}

/**
 * Number of child layers the group layer has.
 */
interface GroupLayer extends Layer {
  /**
   * Number of child layers the group layer has.
   */
  readonly layerCount: number;

  /**
   * Constructs a new group layer.
   */
  constructor();

  /**
   * Returns a reference to the child layer at the given index.
   */
  layerAt(index: number): Layer;

  /**
   * Removes the child layer at the given index. When a reference to the
   * layer still exists and this group layer isn't already standalone,
   * that reference becomes a standalone copy of the layer.
   */
  removeLayerAt(index: number): void

  /**
   * Removes the given layer from the group. If this group wasn't
   * standalone, the reference to the layer becomes a standalone copy.
   */
  removeLayer(layer: Layer): void;

  /**
   * Inserts the layer at the given index. The layer can't already be
   * part of a map.
   *
   * When adding a {@see TileLayer} to a
   * map, the layer's width and height are automatically initialized to
   * the size of the map (since Tiled 1.4.2).
   */
  insertLayerAt(index: number, layer: Layer): void;

  /**
   * Adds the layer to the group, above all existing layers. The layer
   * can't already be part of a map.
   *
   * When adding a {@see TileLayer} to a
   * map, the layer's width and height are automatically initialized to
   * the size of the map (since Tiled 1.4.2).
   */
  addLayer(layer: Layer): void;
}

interface ImageFormat {}

interface AspectRatio {}

interface TransformationMode {}

declare namespace TiledImage {
  const Format_Invalid: number;
  const Format_Mono: number;
  const Format_MonoLSB: number;
  const Format_Indexed8: number;
  const Format_RGB32: number;
  const Format_ARGB32: number;
  const Format_ARGB32_Premultiplied: number;
  const Format_RGB16: number;
  const Format_ARGB8565_Premultiplied: number;
  const Format_RGB666: number;
  const Format_ARGB6666_Premultiplied: number;
  const Format_RGB555: number;
  const Format_ARGB8555_Premultiplied: number;
  const Format_RGB888: number;
  const Format_RGB444: number;
  const Format_ARGB4444_Premultiplied: number;
  const Format_RGBX8888: number;
  const Format_RGBA8888: number;
  const Format_RGBA8888_Premultiplied: number;
  const Format_BGR30: number;
  const Format_A2BGR30_Premultiplied: number;
  const Format_RGB30: number;
  const Format_A2RGB30_Premultiplied: number;
  const Format_Alpha8: number;
  const Format_Grayscale8: number;
  const Format_RGBX64: number;
  const Format_RGBA64: number;
  const Format_RGBA64_Premultiplied: number;
  const Format_Grayscale16: number;
  const Format_BGR888: number;
}

/**
 * @since New in Tiled 1.5
 *
 * Can be used to create, load, save and modify images. Also useful when
 * writing an importer, where the image can be set on a tileset or its
 * tiles ({@see Tileset.loadFromImage} and {@see Tile.setImage}.
 */
declare class TiledImage {
  /**
   * Width of the image in pixels.
   */
  width: number;

  /**
   * Height of the image in pixels.
   */
  height: number;

  /**
   * Number of bits used to store a single pixel.
   */
  depth: number;

  /**
   * Size of the image in pixels.
   */
  size: size;

  /**
   * Format of the image.
   */
  format: ImageFormat;

  /**
   * Constructs an empty image.
   */
  constructor();

  /**
   * Constructs an image of the given size using the given format.
   */
  constructor(width: number, height: number, format: ImageFormat);

  /**
   * Constructs an image from the given data, interpreting it in the
   * specified format and size.
   */
  constructor(
    data: ArrayBuffer,
    width: number,
    height: number,
    format: ImageFormat
    );

  /**
   * Constructs an image from the given data, interpreting it in the
   * specified format and size. The `bytesPerLine` argument
   * specifies the stride and can be useful for referencing a sub-image.
   */
  constructor(
    data: ArrayBuffer,
    width: number,
    height: number,
    bytesPerLine: number,
    format: ImageFormat
    );

  /**
   * Construct an image by loading it from the given file name. When no
   * format is given it will be auto-detected (can be "bmp", "png",
   * etc.).
   */
  constructor(fileName: string, format?: string);

  /**
   * Returns the 32-bit color value.
   */
  pixel(x: number, y: number): number;

  /**
   * Returns the color at the given position as string like "#rrggbb".
   */
  pixelColor(x: number, y: number): string;

  /**
   * Sets the color at the specified location to the given 32-bit color
   * value or color table index.
   */
  setPixel(x: number, y: number, index_or_rgb: number): void;

  /**
   * Sets the color at the specified location to the given color by
   * string (supports values like "#rrggbb").
   */
  setPixelColor(x: number, y: number, color: string): void;

  /**
   * Fills the image with the given 32-bit color value or color table
   * index.
   */
  fill(index_or_rgb: number): void;

  /**
   * Fills the image with the given color by string (supports values like
   * "#rrggbb").
   */
  fill(color: string): void;

  /**
   * Loads the image from the given file name. When no format is given it
   * will be auto-detected (can be "bmp", "png", etc.).
   */
  load(fileName: string, format?: string): void;

  /**
   * Loads the image from the given data interpreted with the given
   * format (can be "bmp", "png", etc.).
   */
  loadFromData(data: ArrayBuffer, format: string): void;

  /**
   * Returns the 32-bit color value at the given index in the color
   * table.
   */
  color(index: number): number;

  /**
   * Returns the color table as an array of 32-bit color values.
   */
  colorTable(): number[];

  /**
   * Sets the color at the given index in the color table to a given
   * 32-bit color value.
   */
  setColor(index: number, rgb: number): void;

  /**
   * Sets the color at the given index in the color table to a color by
   * string (supports values like "#rrggbb").
   */
  setColor(index: number, color: string) : void;

  /**
   * Sets the color table given by an array of either 32-bit color values
    or strings (supports values like "#rrggbb").
   */
  setColorTable(colors: number[] | string[]): void;

  /**
   * Copies the given rectangle to a new image object.
   */
  copy(x: number, y: number, width: number, height: number) : TiledImage;

  /**
   * Returns a scaled copy of this image. Default `aspectRatioMode`
   * behavior is to ignore the aspect ratio. Default `mode` is a fast
   * transformation.
   */
  scaled(width: number, height: number, aspectRatioMode: AspectRatio, transformationMode: TransformationMode): TiledImage;

  /**
   * Returns a mirrored copy of this image.
   */
  mirrored(horizontal: boolean, vertical: boolean) : TiledImage;

  readonly IgnoreAspectRatio: number;
  readonly KeepAspectRatio: number;
  readonly KeepAspectRatioByExpanding: number;

  readonly FastTransformation: number;
  readonly SmoothTransformation: number;
}

interface ImageLayer extends Layer {
  /**
   * Color used as transparent color when rendering the image.
   */
  transparentColor: number;

  /**
   * Reference to the image rendered by this layer.
   */
  imageSource: string;

  /**
   * Sets the image for this layer to the given image, optionally also
   * setting the source of the image.
   *
   * *Warning: This function has no undo!*
   */
  loadFromImage(image: TiledImage, source?: string) : void;
}

interface MapFormat {
  /**
   * Name of the format as shown in the file dialog.
   */
  readonly name: string;

  /**
   * The file extension used by the format.
   */
  readonly extension: string;

  /**
   * A function that reads a map from the given file. Can use
   * {@see TextFile} or {@see BinaryFile} to read the file.
   */
  read?(fileName: string): TileMap;

  /**
   * A function that writes a map to the given
   * file. Can use {@see TextFile} or {@see BinaryFile} to write the file. * When a non-empty string is returned, it is shown as error message.
   */
  write?(map: TileMap, fileName: string): string | undefined;

  /**
   * A function that returns the list of files that will
   * be written when exporting the given map (optional).
   */
  outputFiles?: (map: TileMap, fileName: string) => string[];
}

interface MapEditor {}

interface Layer extends TiledObject {
  /**
   * Unique (map-wide) ID of the layer
   *
   * @since Tiled 1.5
   */
  readonly id: number;

  /**
   * Name of the layer.
   */
  name: string;

  /**
   * Opacity of the layer, from 0 (fully transparent) to 1 (fully
   * opaque).
   */
  opacity: any;

  /**
   * Whether the layer is visible (affects
   * child layer visibility for group layers).
   */
  visible: boolean;

  /**
   * Whether
   * the layer is locked (affects whether child layers are locked for group
   * layers).
   */
  locked: boolean;

  /**
   * Offset in pixels that is applied when this layer is rendered.
   */
  offset: point;

  /**
   * Map that this layer is
   * part of (or `null` in case of a standalone layer).
   */
  map: TileMap;

  /**
   * Whether the layer is selected.
   */
  selected: boolean;

  /**
   * Whether this layer is a {@see TileLayer}.
   */
  readonly isTileLayer: boolean;

  /**
   * Whether this layer is an {@see ObjectLayer}.
   */
  readonly isObjectLayer: boolean;

  /**
   * Whether this layer is a {@see GroupLayer}.
   */
  readonly isGroupLayer: boolean;

  /**
   * Whether this layer is an {@see ImageLayer}.
   */
  readonly isImageLayer: boolean;
}

declare class TileMap extends Asset {
  constructor();

  public autoMap(rulesFule?: string): void;
  public autoMap(region: region | rect, rulesFile?: string): void;
  public setSize(width: number, height: number): void;
  public setTileSize(width: number, height: number): void;
  public layerAt(index: number): Layer;
  public removeLayerAt(index: number): void;
  public removeLayer(layer: Layer): void;
  public insertLayerAt(index: number, layer: Layer): void;
  public addLayer(layer: Layer): void;
  public addTileset(tileset: Tileset): boolean;
  public replaceTileset(oldTileset: Tileset, newTileset: Tileset): boolean;
  public removeTileset(tileset: Tileset): boolean;
  public usedTilesets(): Tileset[];
  public merge(map: TileMap, canJoin?: boolean): void;
  public resize(size: size, offset?: point, removeObjects?: boolean): void;
  public screenToTile(x: number, y: number): point;
  public screenToTile(position: point): point;
  public tileToScreen(x: number, y: number): point;
  public tileToScreen(position: point): point;

  /**
   * Converts the given position from screen to pixel coordinates.
   * @param x
   * @param y
   */
  public screenToPixel(x: number, y: number): point;

  /**
   * Converts the given position from screen to pixel coordinates.
   * @param position
   */
  public screenToPixel(position: point): point;

  /**
   * Converts the given position from pixel to screen coordinates.
   * @param x
   * @param y
   */
  public pixelToScreen(x: number, y: number): point;

  /**
   * Converts the given position from pixel to screen coordinates.
   * @param position
   */
  public pixelToScreen(position: point): point;

  /**
   * Converts the given position from pixel to tile coordinates.
   * @param x
   * @param y
   */
  public tileToPixel(x: number, y: number): point;

  /**
   * Converts the given position from pixel to tile coordinates.
   * @param position
   */
  public tileToPixel(position: point): point;

  /**
   * Converts the given position from tile to pixel coordinates.
   * @param position
   */
  public pixelToTile(x: number, y: number): point;

  /**
   * Converts the given position from tile to pixel coordinates.
   * @param position
   */
  public pixelToTile(position: point): point;
}

interface Tileset {}

interface TilesetFormat {
  /**
   * Name of the format as shown in the file dialog.
   */
  readonly name: string;

  /**
   * The file extension used by the format.
   */
  readonly extension: string;

  /**
   * A function that reads a tileset from the given file.
   *
   * Can use {@see TextFile} or {@see BinaryFile} to read the file.
   */
  read?: (fileName: string) => Tileset;

  /**
   * A function that writes a tileset to the given file.
   *
   * Can use {@see TextFile} or {@see BinaryFile} to write the file.
   * When a non-empty string is returned, it is shown as error message.
   */
  write?: (tileset: Tileset, fileName: string) => string | undefined;
}

interface TilesetEditor {}

interface Tool {
  /**
   * Name of the tool as shown on the tool bar.
   */
  name: string;

  /**
   * Currently active tile map.
   */
  map: TileMap;

  /**
   * The last clicked tile for the active map. See also the {@see MapEditor.* currentBrush | currentBrush} property.
   */
  selectedTile: any;

  /**
   * Get or set the preview for tile layer edits.
   */
  preview: TileMap;

  /**
   * Mouse cursor position in tile coordinates.
   */
  tilePosition: point;

  /**
   * Text shown in the status bar while the tool is active.
   */
  statusInfo: string;

  /**
   * Whether this tool is enabled.
   */
  enabled: boolean;

  /**
   * Called when the tool was activated.
   */
  activated(): void;

  /**
   * Called when the tool was deactivated.
   */
  deactivated(): void;

  /**
   * Called when a key was pressed while the tool was active.
   */
  keyPressed(key, modifiers): void;

  /**
   * Called when the mouse entered the map view.
   */
  mouseEntered(): void;

  /**
   * Called when the mouse left the map view.
   */
  mouseLeft(): void;

  /**
   * Called when the mouse position in the map scene changed.
   */
  mouseMoved(x: number, y: number, modifiers): void;

  /**
   * Called when a mouse button was pressed.
   */
  mousePressed(button, x: number, y: number, modifiers): void;

  /**
   * Called when a mouse button was released.
   */
  mouseReleased(button, x: number, y: number, modifiers): void;

  /**
   * Called when a mouse button was double-clicked.
   */
  mouseDoubleClicked(button, x: number, y: number, modifiers): void;

  /**
   * Called when the active modifier keys changed.
   */
  modifiersChanged(modifiers): void;

  /**
   * Called when the language was changed.
   */
  languageChanged(): void;

  /**
   * Called when the active map was changed.
   */
  mapChanged(oldMap: TileMap, newMap: TileMap): void;

  /**
   * Called when the hovered tile position changed.
   */
  tilePositionChanged(): void;

  /**
   * Called when the hovered tile position changed.
   *
   * Used to override the default updating of the status bar text.
   */
  updateStatusInfo(): void;

  /**
   * Called when the map or the current layer changed.
   */
  updateEnabledState(): void;
}

declare namespace tiled {
  /**
   * Currently used version of Tiled.
   */
  export const version: string;

  /**
   * Operating system. One of `windows`, `macos`, `linux` or
   * `unix` (for any other UNIX-like system).
   */
  export const platform: string;

  /**
   * Processor architecture. One of `x64`, `x86` or `unknown`.
   */
  export const arch: string;

  /**
   * Available actions for {@link trigger | tiled.trigger()}.
   */
  export const actions: string[];

  /**
   * Available menus for {@link extendMenu | tiled.extendMenu()}.
   */
  export const menus: string[];

  /**
   * urrently selected asset, or `null` if no file is open.
   * Can be assigned any open asset in order to change the active asset.
   */
  export let activeAsset: Asset;

  /**
   * List of currently opened {@link Asset | assets}.
   */
  export const openAssets: Asset[];

  /**
   * List of supported tileset format names. Use {@link tilesetFormat}
   * to get the corresponding format object to read and write files.
   * @since 1.4
   */
  export const tilesetFormats: string[];

  /**
   * List of supported map format names. Use {@link mapFormat} to get
   * the corresponding format object to read and write files.
   * @since 1.4
   */
  export const mapFormats: string[];

  /**
   * Access the editor used when editing maps.
   */
  export const mapEditor: MapEditor;

  /**
   * Access the editor used when editing tilesets.
   */
  export const tilesetEditor: TilesetEditor;

  /**
   * This function can be used to trigger any registered action. This
   * includes most actions you would normally trigger through the menu or
   * by using their shortcut.
   *
   *
   *
   * Actions that are checkable will toggle when triggered.
   * @param action The action to trigger. Use the
   *               {@link actions | tiled.actions} property to get a list
   *               of all available actions.
   */
  export function trigger(action: string): void;

  /**
   * Executes the first custom command with the given name, as if it was
   * triggered manually. Works also with commands that are not currently
   * enabled.
   *
   * Raises a script error if the command is not found.
   */
  export function executeCommand(name: string, inTerminal: boolean): void;

  /**
   * Requests to open the asset with the given file name. Returns a
   * reference to the opened asset, or `null` in case there was a
   * problem.
   */
  export function open(fileName: string): Asset | null;

  /**
   * Closes the given asset without checking for unsaved changes (to
   * confirm the loss of any unsaved changes, set {@link activeAsset} and
   * trigger the "Close" action instead).
   * @param asset
   */
  export function close(asset: Asset): boolean;

  /**
   * Reloads the given asset from disk, without checking for unsaved
   * changes. This invalidates the previous script reference to the
   * asset, hence the new reference is returned for convenience. Returns
   * `null` if reloading failed.
   */
  export function reload(asset: Asset): Asset | null;

  /**
   * Shows a modal warning dialog to the user with the given text and
   * optional title.
   */
  export function alert(text: string, title?: string): void;

  /**
   * Shows a yes/no dialog to the user with the given text and optional
    title. Returns `true` or `false`.
   */
  export function confirm(text: string, title?: string): boolean;

  /**
   * Shows a dialog that asks the user to enter some text, along with the
   * given label and optional title. The optional `text` parameter
   * provides the initial value of the text. Returns the entered text.
   */
  export function prompt(label: string, text?: string, title?: string): string;

  /**
   * Outputs the given text in the Console window as regular text.
   */
  export function log(text: string): void;

  /**
   * Outputs the given text in the Console window as warning message and
   * creates an issue in the Issues window.
   *
   * When the issue is activated (with double-click or Enter key) the
   * given callback function is invoked.
   */
  export function warn(text: string, activated: () => void): void;

  /**
   * Outputs the given text in the Console window as error message and
   * creates an issue in the Issues window.
   *
   * When the issue is activated (with double-click or Enter key) the
   * given callback function is invoked.
   */
  export function error(text: string, activated: () => void): void;

  /**
   * Extends the menu with the given ID. Supports both a list of items or
   * a single item. Available menu IDs can be obtained using the
   * `tiled.menus` property.
   *
   * If a menu item does not include a `before` property, the value is
   * inherited from the previous item. When this property is not set at
   * all, the items are appended to the end of the menu.
   *
   * Example that adds a custom action to the \"Edit\" menu, before the
   * \"Select All\" action and separated by a separator:
   *
   * ```js
   * tiled.extendMenu("Edit", [
   *     { action: "CustomAction", before: "SelectAll" },
   *     { separator: true }
   * ]);
   * ```
   *
   * The \"CustomAction\" will need to have been registered before using
   * {@see registerAction | tiled.registerAction()}.
   */
  export function extendMenu(
    shortName: string,
    menu: Menu[]
  ): void;

  /**
   * Registers a new action with the given `id` and `callback` (which is
   * called when the action is triggered). The returned action object can
   * be used to set (and update) various properties of the action.
   *
   * @example
   * ```js
   * var action = tiled.registerAction("CustomAction", function(action) {
   *     tiled.log(action.text + " was " + (action.checked ? "checked" : "unchecked"))
   * })
   *
   * action.text = "My Custom Action"
   * action.checkable = true
   * action.shortcut = "Ctrl+K"
   * ```
   *
   * The shortcut will currently only work when the action is added to a
   * menu using {@see extendMenu | tiled.extendMenu()}.
   */
  export function registerAction(
    id: string,
    callback: (action: Action) => void
  ): Action;

  /**
   * Registers a custom tool that will become available on the Tools tool
   * bar of the Map Editor.
   *
   * If a tool is already registered with the same `shortName` the
   * existing tool is replaced.
   *
   * @example
   * Here is an example tool that places a rectangle each time the mouse
   * has moved by 32 pixels:
   *
   * ```js
   * var tool = tiled.registerTool("PlaceRectangles", {
   *     name: "Place Rectangles",
   *
   *     mouseMoved: function(x, y, modifiers) {
   *         if (!this.pressed)
   *             return
   *
   *         var dx = Math.abs(this.x - x)
   *         var dy = Math.abs(this.y - y)
   *
   *         this.distance += Math.sqrt(dx*dx + dy*dy)
   *         this.x = x
   *         this.y = y
   *
   *         if (this.distance > 32) {
   *             var objectLayer = this.map.currentLayer
   *
   *             if (objectLayer && objectLayer.isObjectLayer) {
   *                 var object = new MapObject(++this.counter)
   *                 object.x = Math.min(this.lastX, x)
   *                 object.y = Math.min(this.lastY, y)
   *                 object.width = Math.abs(this.lastX - x)
   *                 object.height = Math.abs(this.lastY - y)
   *                 objectLayer.addObject(object)
   *             }
   *
   *             this.distance = 0
   *             this.lastX = x
   *             this.lastY = y
   *         }
   *     },
   *
   *     mousePressed: function(button, x, y, modifiers) {
   *         this.pressed = true
   *         this.x = x
   *         this.y = y
   *         this.distance = 0
   *         this.counter = 0
   *         this.lastX = x
   *         this.lastY = y
   *     },
   *
   *     mouseReleased: function(button, x, y, modifiers) {
   *         this.pressed = false
   *     },
   * })
   * ```
   */
  export function registerTool(shortName: string, tool: Tool): Tool;

  /**
   * Returns the tileset format object with the given name, or
    `undefined` if no object was found. See the
    {@see tilesetFormats} property for more info.
   */
  export function tilesetFormat(shortName: string): TilesetFormat;

  /**
   * Returns the tileset format object that can read the given file, or
    `undefined` if no object was found.
   */
  export function tilesetFormatForFile(fileName: string): TilesetFormat;

  /**
   * Returns the map format object with the given name, or
   * `undefined` if no object was found. See the
   * {@see mapFormats} property for more info.
   */
  export function mapFormat(shortName: string): MapFormat;

  /**
   * Returns the map format object that can read the given file, or
   * `undefined` if no object was found.
   */
  export function mapFormatForFile(fileName: string): MapFormat;

  /**
   * Creates a {@see FilePath} object with the given URL.
   */
  export function filePath(path: string): FilePath;

  /**
   * Creates an {@see ObjectRef} object with the given ID.
   */
  export function objectRef(id: number): ObjectRef;

  /**
   * Registers a new map format that can then be used to open and/or save
   * maps in that format.
   *
   * If a map format is already registered with the same `shortName`, the
   * existing format is replaced. The short name can also be used to
   * specify the format when using `--export-map` on the command-line, in
   * case the file extension is ambiguous or a different one should be
   * used.
   *
   * @example
   * Example that produces a simple JSON representation of a map:
   * ``` js
   * var customMapFormat = {
   *     name: "Custom map format",
   *     extension: "custom",
   *
   *     write: function(map, fileName) {
   *         var m = {
   *             width: map.width,
   *             height: map.height,
   *             layers: []
   *         };
   *
   *         for (var i = 0; i < map.layerCount; ++i) {
   *             var layer = map.layerAt(i);
   *             if (layer.isTileLayer) {
   *                 var rows = [];
   *                 for (y = 0; y < layer.height; ++y) {
   *                     var row = [];
   *                     for (x = 0; x < layer.width; ++x)
   *                         row.push(layer.cellAt(x, y).tileId);
   *                     rows.push(row);
   *                 }
   *                 m.layers.push(rows);
   *             }
   *         }
   *
   *         var file = new TextFile(fileName, TextFile.WriteOnly);
   *         file.write(JSON.stringify(m));
   *         file.commit();
   *     },
   * }
   *
   * tiled.registerMapFormat("custom", customMapFormat)
   * ```
   */
  export function registerMapFormat(
    shortName: string,
    mapFormat: MapFormat
  ): void;

  /**
   * Like {@see registerMapFormat}, but registers a custom tileset
   * format instead.
   */
  export function registerTilesetFormat(
    shortName: string,
    tilesetFormat: TilesetFormat
  ): void;

  /**
   * A new asset has been created.
   */
  export const assetCreated: Signal<Asset>;

  /**
   * An asset has been opened.
   */
  export const assetOpened: Signal<Asset>;

  /**
   * An asset is about to be saved. Can be used to make last-minute
   * changes.
   */
  export const assetAboutToBeSaved: Signal<Asset>;

  /**
   * An asset has been saved.
   */
  export const assetSaved: Signal<Asset>;

  /**
   * An asset is about to be closed.
   */
  export const assetAboutToBeClosed: Signal<Asset>;

  /**
   * The currently active asset has changed.
   */
  export const activeAssetChanged: Signal<Asset>;
}
