/* eslint-disable */
/**
 * Checker mode Possible values: `None`, `Horizontal`, `Vertical`
 */
export var Checker;
(function (Checker) {
    Checker["Horizontal"] = "Horizontal";
    Checker["None"] = "None";
    Checker["Vertical"] = "Vertical";
})(Checker || (Checker = {}));

/**
 * Defines how tileIds array is used Possible values: `Single`, `Stamp`
 */
export var TileMode;
(function (TileMode) {
    TileMode["Single"] = "Single";
    TileMode["Stamp"] = "Stamp";
})(TileMode || (TileMode = {}));

/**
 * Possible values: `Manual`, `AfterLoad`, `BeforeSave`, `AfterSave`
 */
export var When;
(function (When) {
    When["AfterLoad"] = "AfterLoad";
    When["AfterSave"] = "AfterSave";
    When["BeforeSave"] = "BeforeSave";
    When["Manual"] = "Manual";
})(When || (When = {}));

/**
 * Possible values: `Any`, `OnlySame`, `OnlyTags`, `OnlySpecificEntity`
 */
export var AllowedRefs;
(function (AllowedRefs) {
    AllowedRefs["Any"] = "Any";
    AllowedRefs["OnlySame"] = "OnlySame";
    AllowedRefs["OnlySpecificEntity"] = "OnlySpecificEntity";
    AllowedRefs["OnlyTags"] = "OnlyTags";
})(AllowedRefs || (AllowedRefs = {}));

/**
 * Possible values: `Hidden`, `ValueOnly`, `NameAndValue`, `EntityTile`, `LevelTile`,
 * `Points`, `PointStar`, `PointPath`, `PointPathLoop`, `RadiusPx`, `RadiusGrid`,
 * `ArrayCountWithLabel`, `ArrayCountNoLabel`, `RefLinkBetweenPivots`,
 * `RefLinkBetweenCenters`
 */
export var EditorDisplayMode;
(function (EditorDisplayMode) {
    EditorDisplayMode["ArrayCountNoLabel"] = "ArrayCountNoLabel";
    EditorDisplayMode["ArrayCountWithLabel"] = "ArrayCountWithLabel";
    EditorDisplayMode["EntityTile"] = "EntityTile";
    EditorDisplayMode["Hidden"] = "Hidden";
    EditorDisplayMode["LevelTile"] = "LevelTile";
    EditorDisplayMode["NameAndValue"] = "NameAndValue";
    EditorDisplayMode["PointPath"] = "PointPath";
    EditorDisplayMode["PointPathLoop"] = "PointPathLoop";
    EditorDisplayMode["PointStar"] = "PointStar";
    EditorDisplayMode["Points"] = "Points";
    EditorDisplayMode["RadiusGrid"] = "RadiusGrid";
    EditorDisplayMode["RadiusPx"] = "RadiusPx";
    EditorDisplayMode["RefLinkBetweenCenters"] = "RefLinkBetweenCenters";
    EditorDisplayMode["RefLinkBetweenPivots"] = "RefLinkBetweenPivots";
    EditorDisplayMode["ValueOnly"] = "ValueOnly";
})(EditorDisplayMode || (EditorDisplayMode = {}));

/**
 * Possible values: `Above`, `Center`, `Beneath`
 */
export var EditorDisplayPos;
(function (EditorDisplayPos) {
    EditorDisplayPos["Above"] = "Above";
    EditorDisplayPos["Beneath"] = "Beneath";
    EditorDisplayPos["Center"] = "Center";
})(EditorDisplayPos || (EditorDisplayPos = {}));

/**
 * Possible values: `ZigZag`, `StraightArrow`, `CurvedArrow`, `ArrowsLine`, `DashedLine`
 */
export var EditorLinkStyle;
(function (EditorLinkStyle) {
    EditorLinkStyle["ArrowsLine"] = "ArrowsLine";
    EditorLinkStyle["CurvedArrow"] = "CurvedArrow";
    EditorLinkStyle["DashedLine"] = "DashedLine";
    EditorLinkStyle["StraightArrow"] = "StraightArrow";
    EditorLinkStyle["ZigZag"] = "ZigZag";
})(EditorLinkStyle || (EditorLinkStyle = {}));

export var TextLanguageMode;
(function (TextLanguageMode) {
    TextLanguageMode["LangC"] = "LangC";
    TextLanguageMode["LangHaxe"] = "LangHaxe";
    TextLanguageMode["LangJS"] = "LangJS";
    TextLanguageMode["LangJSON"] = "LangJson";
    TextLanguageMode["LangLog"] = "LangLog";
    TextLanguageMode["LangLua"] = "LangLua";
    TextLanguageMode["LangMarkdown"] = "LangMarkdown";
    TextLanguageMode["LangPython"] = "LangPython";
    TextLanguageMode["LangRuby"] = "LangRuby";
    TextLanguageMode["LangXML"] = "LangXml";
})(TextLanguageMode || (TextLanguageMode = {}));

/**
 * Possible values: `DiscardOldOnes`, `PreventAdding`, `MoveLastOne`
 */
export var LimitBehavior;
(function (LimitBehavior) {
    LimitBehavior["DiscardOldOnes"] = "DiscardOldOnes";
    LimitBehavior["MoveLastOne"] = "MoveLastOne";
    LimitBehavior["PreventAdding"] = "PreventAdding";
})(LimitBehavior || (LimitBehavior = {}));

/**
 * If TRUE, the maxCount is a "per world" limit, if FALSE, it's a "per level". Possible
 * values: `PerLayer`, `PerLevel`, `PerWorld`
 */
export var LimitScope;
(function (LimitScope) {
    LimitScope["PerLayer"] = "PerLayer";
    LimitScope["PerLevel"] = "PerLevel";
    LimitScope["PerWorld"] = "PerWorld";
})(LimitScope || (LimitScope = {}));

/**
 * Possible values: `Rectangle`, `Ellipse`, `Tile`, `Cross`
 */
export var RenderMode;
(function (RenderMode) {
    RenderMode["Cross"] = "Cross";
    RenderMode["Ellipse"] = "Ellipse";
    RenderMode["Rectangle"] = "Rectangle";
    RenderMode["Tile"] = "Tile";
})(RenderMode || (RenderMode = {}));

/**
 * An enum describing how the the Entity tile is rendered inside the Entity bounds. Possible
 * values: `Cover`, `FitInside`, `Repeat`, `Stretch`, `FullSizeCropped`,
 * `FullSizeUncropped`, `NineSlice`
 */
export var TileRenderMode;
(function (TileRenderMode) {
    TileRenderMode["Cover"] = "Cover";
    TileRenderMode["FitInside"] = "FitInside";
    TileRenderMode["FullSizeCropped"] = "FullSizeCropped";
    TileRenderMode["FullSizeUncropped"] = "FullSizeUncropped";
    TileRenderMode["NineSlice"] = "NineSlice";
    TileRenderMode["Repeat"] = "Repeat";
    TileRenderMode["Stretch"] = "Stretch";
})(TileRenderMode || (TileRenderMode = {}));

/**
 * Type of the layer as Haxe Enum Possible values: `IntGrid`, `Entities`, `Tiles`,
 * `AutoLayer`
 */
export var Type;
(function (Type) {
    Type["AutoLayer"] = "AutoLayer";
    Type["Entities"] = "Entities";
    Type["IntGrid"] = "IntGrid";
    Type["Tiles"] = "Tiles";
})(Type || (Type = {}));

export var EmbedAtlas;
(function (EmbedAtlas) {
    EmbedAtlas["LdtkIcons"] = "LdtkIcons";
})(EmbedAtlas || (EmbedAtlas = {}));

export var BgPos;
(function (BgPos) {
    BgPos["Contain"] = "Contain";
    BgPos["Cover"] = "Cover";
    BgPos["CoverDirty"] = "CoverDirty";
    BgPos["Repeat"] = "Repeat";
    BgPos["Unscaled"] = "Unscaled";
})(BgPos || (BgPos = {}));

export var WorldLayout;
(function (WorldLayout) {
    WorldLayout["Free"] = "Free";
    WorldLayout["GridVania"] = "GridVania";
    WorldLayout["LinearHorizontal"] = "LinearHorizontal";
    WorldLayout["LinearVertical"] = "LinearVertical";
})(WorldLayout || (WorldLayout = {}));

export var Flag;
(function (Flag) {
    Flag["DiscardPreCSVIntGrid"] = "DiscardPreCsvIntGrid";
    Flag["ExportPreCSVIntGridFormat"] = "ExportPreCsvIntGridFormat";
    Flag["IgnoreBackupSuggest"] = "IgnoreBackupSuggest";
    Flag["MultiWorlds"] = "MultiWorlds";
    Flag["PrependIndexToLevelFileNames"] = "PrependIndexToLevelFileNames";
    Flag["UseMultilinesType"] = "UseMultilinesType";
})(Flag || (Flag = {}));

/**
 * Naming convention for Identifiers (first-letter uppercase, full uppercase etc.) Possible
 * values: `Capitalize`, `Uppercase`, `Lowercase`, `Free`
 */
export var IdentifierStyle;
(function (IdentifierStyle) {
    IdentifierStyle["Capitalize"] = "Capitalize";
    IdentifierStyle["Free"] = "Free";
    IdentifierStyle["Lowercase"] = "Lowercase";
    IdentifierStyle["Uppercase"] = "Uppercase";
})(IdentifierStyle || (IdentifierStyle = {}));

/**
 * "Image export" option when saving project. Possible values: `None`, `OneImagePerLayer`,
 * `OneImagePerLevel`, `LayersAndLevels`
 */
export var ImageExportMode;
(function (ImageExportMode) {
    ImageExportMode["LayersAndLevels"] = "LayersAndLevels";
    ImageExportMode["None"] = "None";
    ImageExportMode["OneImagePerLayer"] = "OneImagePerLayer";
    ImageExportMode["OneImagePerLevel"] = "OneImagePerLevel";
})(ImageExportMode || (ImageExportMode = {}));

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
/** */
export class Convert {
    /**
     * @public
     * @static
     * @param {string} json
     * @returns {LDTKProject}
     */
    static toLDTKProject(json) {
        return cast(JSON.parse(json), r("LDTKProject"));
    }

    /**
     * @public
     * @static
     * @param {LDTKProject} value
     * @returns {string}
     */
    static lDTKProjectToJson(value) {
        return JSON.stringify(uncast(value, r("LDTKProject")), null, 2);
    }
}

/**
 * @param {any} typ
 * @param {any} val
 * @param {any} key
 * @param {any} parent
 * @returns {never}
 */
function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

/**
 * @param {any} typ
 * @returns {string}
 */
function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        }
        else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    }
    else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    }
    else {
        return typeof typ;
    }
}

/**
 * @param {any} typ
 * @returns {any}
 */
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

/**
 * @param {any} typ
 * @returns {any}
 */
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

/**
 * @param {any} val
 * @param {any} typ
 * @param {any} getProps
 * @param {any} key
 * @param {any} parent
 * @returns {any}
 */
function transform(val, typ, getProps, key = '', parent = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false)
        return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}

/**
 * @param {any} val
 * @param {any} typ
 * @returns {*}
 */
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}

/**
 * @param {*} val
 * @param {any} typ
 * @returns {any}
 */
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}

/**
 * @param {any} typ
 * @returns {{ literal: any; }}
 */
function l(typ) {
    return { literal: typ };
}

/**
 * @param {any} typ
 * @returns {{ arrayItems: any; }}
 */
function a(typ) {
    return { arrayItems: typ };
}

/**
 * @param {any[]} typs
 * @returns {{ unionMembers: any[]; }}
 */
function u(...typs) {
    return { unionMembers: typs };
}

/**
 * @param {any[]} props
 * @param {any} additional
 * @returns {{ props: any[]; additional: any; }}
 */
function o(props, additional) {
    return { props, additional };
}

/**
 * @param {any} additional
 * @returns {{ props: any[]; additional: any; }}
 */
function m(additional) {
    return { props: [], additional };
}

/**
 * @param {string} name
 * @returns {{ ref: string; }}
 */
function r(name) {
    return { ref: name };
}

const typeMap = {
    "LDTKProject": o([
        { json: "__FORCED_REFS", js: "__FORCED_REFS", typ: u(undefined, r("ForcedRefs")) },
        { json: "appBuildId", js: "appBuildId", typ: 3.14 },
        { json: "backupLimit", js: "backupLimit", typ: 0 },
        { json: "backupOnSave", js: "backupOnSave", typ: true },
        { json: "backupRelPath", js: "backupRelPath", typ: u(undefined, u(null, "")) },
        { json: "bgColor", js: "bgColor", typ: "" },
        { json: "customCommands", js: "customCommands", typ: a(r("LdtkCustomCommand")) },
        { json: "defaultGridSize", js: "defaultGridSize", typ: 0 },
        { json: "defaultLevelBgColor", js: "defaultLevelBgColor", typ: "" },
        { json: "defaultLevelHeight", js: "defaultLevelHeight", typ: u(undefined, u(0, null)) },
        { json: "defaultLevelWidth", js: "defaultLevelWidth", typ: u(undefined, u(0, null)) },
        { json: "defaultPivotX", js: "defaultPivotX", typ: 3.14 },
        { json: "defaultPivotY", js: "defaultPivotY", typ: 3.14 },
        { json: "defs", js: "defs", typ: r("Definitions") },
        { json: "dummyWorldIid", js: "dummyWorldIid", typ: "" },
        { json: "exportLevelBg", js: "exportLevelBg", typ: true },
        { json: "exportPng", js: "exportPng", typ: u(undefined, u(true, null)) },
        { json: "exportTiled", js: "exportTiled", typ: true },
        { json: "externalLevels", js: "externalLevels", typ: true },
        { json: "flags", js: "flags", typ: a(r("Flag")) },
        { json: "identifierStyle", js: "identifierStyle", typ: r("IdentifierStyle") },
        { json: "iid", js: "iid", typ: "" },
        { json: "imageExportMode", js: "imageExportMode", typ: r("ImageExportMode") },
        { json: "jsonVersion", js: "jsonVersion", typ: "" },
        { json: "levelNamePattern", js: "levelNamePattern", typ: "" },
        { json: "levels", js: "levels", typ: a(r("Level")) },
        { json: "minifyJson", js: "minifyJson", typ: true },
        { json: "nextUid", js: "nextUid", typ: 0 },
        { json: "pngFilePattern", js: "pngFilePattern", typ: u(undefined, u(null, "")) },
        { json: "simplifiedExport", js: "simplifiedExport", typ: true },
        { json: "toc", js: "toc", typ: a(r("LdtkTableOfContentEntry")) },
        { json: "tutorialDesc", js: "tutorialDesc", typ: u(undefined, u(null, "")) },
        { json: "worldGridHeight", js: "worldGridHeight", typ: u(undefined, u(0, null)) },
        { json: "worldGridWidth", js: "worldGridWidth", typ: u(undefined, u(0, null)) },
        { json: "worldLayout", js: "worldLayout", typ: u(undefined, u(r("WorldLayout"), null)) },
        { json: "worlds", js: "worlds", typ: a(r("World")) },
    ], "any"),
    "ForcedRefs": o([
        { json: "AutoLayerRuleGroup", js: "AutoLayerRuleGroup", typ: u(undefined, r("AutoLayerRuleGroup")) },
        { json: "AutoRuleDef", js: "AutoRuleDef", typ: u(undefined, r("AutoLayerRuleDefinition")) },
        { json: "CustomCommand", js: "CustomCommand", typ: u(undefined, r("LdtkCustomCommand")) },
        { json: "Definitions", js: "Definitions", typ: u(undefined, r("Definitions")) },
        { json: "EntityDef", js: "EntityDef", typ: u(undefined, r("EntityDefinition")) },
        { json: "EntityInstance", js: "EntityInstance", typ: u(undefined, r("EntityInstance")) },
        { json: "EntityReferenceInfos", js: "EntityReferenceInfos", typ: u(undefined, r("ReferenceToAnEntityInstance")) },
        { json: "EnumDef", js: "EnumDef", typ: u(undefined, r("EnumDefinition")) },
        { json: "EnumDefValues", js: "EnumDefValues", typ: u(undefined, r("EnumValueDefinition")) },
        { json: "EnumTagValue", js: "EnumTagValue", typ: u(undefined, r("EnumTagValue")) },
        { json: "FieldDef", js: "FieldDef", typ: u(undefined, r("FieldDefinition")) },
        { json: "FieldInstance", js: "FieldInstance", typ: u(undefined, r("FieldInstance")) },
        { json: "GridPoint", js: "GridPoint", typ: u(undefined, r("GridPoint")) },
        { json: "IntGridValueDef", js: "IntGridValueDef", typ: u(undefined, r("IntGridValueDefinition")) },
        { json: "IntGridValueInstance", js: "IntGridValueInstance", typ: u(undefined, r("IntGridValueInstance")) },
        { json: "LayerDef", js: "LayerDef", typ: u(undefined, r("LayerDefinition")) },
        { json: "LayerInstance", js: "LayerInstance", typ: u(undefined, r("LayerInstance")) },
        { json: "Level", js: "Level", typ: u(undefined, r("Level")) },
        { json: "LevelBgPosInfos", js: "LevelBgPosInfos", typ: u(undefined, r("LevelBackgroundPosition")) },
        { json: "NeighbourLevel", js: "NeighbourLevel", typ: u(undefined, r("NeighbourLevel")) },
        { json: "TableOfContentEntry", js: "TableOfContentEntry", typ: u(undefined, r("LdtkTableOfContentEntry")) },
        { json: "Tile", js: "Tile", typ: u(undefined, r("TileInstance")) },
        { json: "TileCustomMetadata", js: "TileCustomMetadata", typ: u(undefined, r("TileCustomMetadata")) },
        { json: "TilesetDef", js: "TilesetDef", typ: u(undefined, r("TilesetDefinition")) },
        { json: "TilesetRect", js: "TilesetRect", typ: u(undefined, r("TilesetRectangle")) },
        { json: "World", js: "World", typ: u(undefined, r("World")) },
    ], "any"),
    "AutoLayerRuleGroup": o([
        { json: "active", js: "active", typ: true },
        { json: "collapsed", js: "collapsed", typ: u(undefined, u(true, null)) },
        { json: "isOptional", js: "isOptional", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "rules", js: "rules", typ: a(r("AutoLayerRuleDefinition")) },
        { json: "uid", js: "uid", typ: 0 },
        { json: "usesWizard", js: "usesWizard", typ: true },
    ], false),
    "AutoLayerRuleDefinition": o([
        { json: "active", js: "active", typ: true },
        { json: "alpha", js: "alpha", typ: 3.14 },
        { json: "breakOnMatch", js: "breakOnMatch", typ: true },
        { json: "chance", js: "chance", typ: 3.14 },
        { json: "checker", js: "checker", typ: r("Checker") },
        { json: "flipX", js: "flipX", typ: true },
        { json: "flipY", js: "flipY", typ: true },
        { json: "outOfBoundsValue", js: "outOfBoundsValue", typ: u(undefined, u(0, null)) },
        { json: "pattern", js: "pattern", typ: a(0) },
        { json: "perlinActive", js: "perlinActive", typ: true },
        { json: "perlinOctaves", js: "perlinOctaves", typ: 3.14 },
        { json: "perlinScale", js: "perlinScale", typ: 3.14 },
        { json: "perlinSeed", js: "perlinSeed", typ: 3.14 },
        { json: "pivotX", js: "pivotX", typ: 3.14 },
        { json: "pivotY", js: "pivotY", typ: 3.14 },
        { json: "size", js: "size", typ: 0 },
        { json: "tileIds", js: "tileIds", typ: a(0) },
        { json: "tileMode", js: "tileMode", typ: r("TileMode") },
        { json: "tileRandomXMax", js: "tileRandomXMax", typ: 0 },
        { json: "tileRandomXMin", js: "tileRandomXMin", typ: 0 },
        { json: "tileRandomYMax", js: "tileRandomYMax", typ: 0 },
        { json: "tileRandomYMin", js: "tileRandomYMin", typ: 0 },
        { json: "tileXOffset", js: "tileXOffset", typ: 0 },
        { json: "tileYOffset", js: "tileYOffset", typ: 0 },
        { json: "uid", js: "uid", typ: 0 },
        { json: "xModulo", js: "xModulo", typ: 0 },
        { json: "xOffset", js: "xOffset", typ: 0 },
        { json: "yModulo", js: "yModulo", typ: 0 },
        { json: "yOffset", js: "yOffset", typ: 0 },
    ], false),
    "LdtkCustomCommand": o([
        { json: "command", js: "command", typ: "" },
        { json: "when", js: "when", typ: r("When") },
    ], false),
    "Definitions": o([
        { json: "entities", js: "entities", typ: a(r("EntityDefinition")) },
        { json: "enums", js: "enums", typ: a(r("EnumDefinition")) },
        { json: "externalEnums", js: "externalEnums", typ: a(r("EnumDefinition")) },
        { json: "layers", js: "layers", typ: a(r("LayerDefinition")) },
        { json: "levelFields", js: "levelFields", typ: a(r("FieldDefinition")) },
        { json: "tilesets", js: "tilesets", typ: a(r("TilesetDefinition")) },
    ], false),
    "EntityDefinition": o([
        { json: "color", js: "color", typ: "" },
        { json: "doc", js: "doc", typ: u(undefined, u(null, "")) },
        { json: "exportToToc", js: "exportToToc", typ: true },
        { json: "fieldDefs", js: "fieldDefs", typ: a(r("FieldDefinition")) },
        { json: "fillOpacity", js: "fillOpacity", typ: 3.14 },
        { json: "height", js: "height", typ: 0 },
        { json: "hollow", js: "hollow", typ: true },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "keepAspectRatio", js: "keepAspectRatio", typ: true },
        { json: "limitBehavior", js: "limitBehavior", typ: r("LimitBehavior") },
        { json: "limitScope", js: "limitScope", typ: r("LimitScope") },
        { json: "lineOpacity", js: "lineOpacity", typ: 3.14 },
        { json: "maxCount", js: "maxCount", typ: 0 },
        { json: "nineSliceBorders", js: "nineSliceBorders", typ: a(0) },
        { json: "pivotX", js: "pivotX", typ: 3.14 },
        { json: "pivotY", js: "pivotY", typ: 3.14 },
        { json: "renderMode", js: "renderMode", typ: r("RenderMode") },
        { json: "resizableX", js: "resizableX", typ: true },
        { json: "resizableY", js: "resizableY", typ: true },
        { json: "showName", js: "showName", typ: true },
        { json: "tags", js: "tags", typ: a("") },
        { json: "tileId", js: "tileId", typ: u(undefined, u(0, null)) },
        { json: "tileOpacity", js: "tileOpacity", typ: 3.14 },
        { json: "tileRect", js: "tileRect", typ: u(undefined, u(r("TilesetRectangle"), null)) },
        { json: "tileRenderMode", js: "tileRenderMode", typ: r("TileRenderMode") },
        { json: "tilesetId", js: "tilesetId", typ: u(undefined, u(0, null)) },
        { json: "uid", js: "uid", typ: 0 },
        { json: "width", js: "width", typ: 0 },
    ], false),
    "FieldDefinition": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "acceptFileTypes", js: "acceptFileTypes", typ: u(undefined, u(a(""), null)) },
        { json: "allowedRefs", js: "allowedRefs", typ: r("AllowedRefs") },
        { json: "allowedRefsEntityUid", js: "allowedRefsEntityUid", typ: u(undefined, u(0, null)) },
        { json: "allowedRefTags", js: "allowedRefTags", typ: a("") },
        { json: "allowOutOfLevelRef", js: "allowOutOfLevelRef", typ: true },
        { json: "arrayMaxLength", js: "arrayMaxLength", typ: u(undefined, u(0, null)) },
        { json: "arrayMinLength", js: "arrayMinLength", typ: u(undefined, u(0, null)) },
        { json: "autoChainRef", js: "autoChainRef", typ: true },
        { json: "canBeNull", js: "canBeNull", typ: true },
        { json: "defaultOverride", js: "defaultOverride", typ: u(undefined, "any") },
        { json: "doc", js: "doc", typ: u(undefined, u(null, "")) },
        { json: "editorAlwaysShow", js: "editorAlwaysShow", typ: true },
        { json: "editorCutLongValues", js: "editorCutLongValues", typ: true },
        { json: "editorDisplayMode", js: "editorDisplayMode", typ: r("EditorDisplayMode") },
        { json: "editorDisplayPos", js: "editorDisplayPos", typ: r("EditorDisplayPos") },
        { json: "editorDisplayScale", js: "editorDisplayScale", typ: 3.14 },
        { json: "editorLinkStyle", js: "editorLinkStyle", typ: r("EditorLinkStyle") },
        { json: "editorShowInWorld", js: "editorShowInWorld", typ: true },
        { json: "editorTextPrefix", js: "editorTextPrefix", typ: u(undefined, u(null, "")) },
        { json: "editorTextSuffix", js: "editorTextSuffix", typ: u(undefined, u(null, "")) },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "isArray", js: "isArray", typ: true },
        { json: "max", js: "max", typ: u(undefined, u(3.14, null)) },
        { json: "min", js: "min", typ: u(undefined, u(3.14, null)) },
        { json: "regex", js: "regex", typ: u(undefined, u(null, "")) },
        { json: "symmetricalRef", js: "symmetricalRef", typ: true },
        { json: "textLanguageMode", js: "textLanguageMode", typ: u(undefined, u(r("TextLanguageMode"), null)) },
        { json: "tilesetUid", js: "tilesetUid", typ: u(undefined, u(0, null)) },
        { json: "type", js: "type", typ: "" },
        { json: "uid", js: "uid", typ: 0 },
        { json: "useForSmartColor", js: "useForSmartColor", typ: true },
    ], false),
    "TilesetRectangle": o([
        { json: "h", js: "h", typ: 0 },
        { json: "tilesetUid", js: "tilesetUid", typ: 0 },
        { json: "w", js: "w", typ: 0 },
        { json: "x", js: "x", typ: 0 },
        { json: "y", js: "y", typ: 0 },
    ], false),
    "EnumDefinition": o([
        { json: "externalFileChecksum", js: "externalFileChecksum", typ: u(undefined, u(null, "")) },
        { json: "externalRelPath", js: "externalRelPath", typ: u(undefined, u(null, "")) },
        { json: "iconTilesetUid", js: "iconTilesetUid", typ: u(undefined, u(0, null)) },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "tags", js: "tags", typ: a("") },
        { json: "uid", js: "uid", typ: 0 },
        { json: "values", js: "values", typ: a(r("EnumValueDefinition")) },
    ], false),
    "EnumValueDefinition": o([
        { json: "__tileSrcRect", js: "__tileSrcRect", typ: u(undefined, u(a(0), null)) },
        { json: "color", js: "color", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "tileId", js: "tileId", typ: u(undefined, u(0, null)) },
        { json: "tileRect", js: "tileRect", typ: u(undefined, u(r("TilesetRectangle"), null)) },
    ], false),
    "LayerDefinition": o([
        { json: "__type", js: "__type", typ: "" },
        { json: "autoRuleGroups", js: "autoRuleGroups", typ: a(r("AutoLayerRuleGroup")) },
        { json: "autoSourceLayerDefUid", js: "autoSourceLayerDefUid", typ: u(undefined, u(0, null)) },
        { json: "autoTilesetDefUid", js: "autoTilesetDefUid", typ: u(undefined, u(0, null)) },
        { json: "canSelectWhenInactive", js: "canSelectWhenInactive", typ: true },
        { json: "displayOpacity", js: "displayOpacity", typ: 3.14 },
        { json: "doc", js: "doc", typ: u(undefined, u(null, "")) },
        { json: "excludedTags", js: "excludedTags", typ: a("") },
        { json: "gridSize", js: "gridSize", typ: 0 },
        { json: "guideGridHei", js: "guideGridHei", typ: 0 },
        { json: "guideGridWid", js: "guideGridWid", typ: 0 },
        { json: "hideFieldsWhenInactive", js: "hideFieldsWhenInactive", typ: true },
        { json: "hideInList", js: "hideInList", typ: true },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "inactiveOpacity", js: "inactiveOpacity", typ: 3.14 },
        { json: "intGridValues", js: "intGridValues", typ: a(r("IntGridValueDefinition")) },
        { json: "parallaxFactorX", js: "parallaxFactorX", typ: 3.14 },
        { json: "parallaxFactorY", js: "parallaxFactorY", typ: 3.14 },
        { json: "parallaxScaling", js: "parallaxScaling", typ: true },
        { json: "pxOffsetX", js: "pxOffsetX", typ: 0 },
        { json: "pxOffsetY", js: "pxOffsetY", typ: 0 },
        { json: "renderInWorldView", js: "renderInWorldView", typ: true },
        { json: "requiredTags", js: "requiredTags", typ: a("") },
        { json: "tilePivotX", js: "tilePivotX", typ: 3.14 },
        { json: "tilePivotY", js: "tilePivotY", typ: 3.14 },
        { json: "tilesetDefUid", js: "tilesetDefUid", typ: u(undefined, u(0, null)) },
        { json: "type", js: "type", typ: r("Type") },
        { json: "uiColor", js: "uiColor", typ: u(undefined, u(null, "")) },
        { json: "uid", js: "uid", typ: 0 },
    ], false),
    "IntGridValueDefinition": o([
        { json: "color", js: "color", typ: "" },
        { json: "identifier", js: "identifier", typ: u(undefined, u(null, "")) },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "TilesetDefinition": o([
        { json: "__cHei", js: "__cHei", typ: 0 },
        { json: "__cWid", js: "__cWid", typ: 0 },
        { json: "cachedPixelData", js: "cachedPixelData", typ: u(undefined, u(m("any"), null)) },
        { json: "customData", js: "customData", typ: a(r("TileCustomMetadata")) },
        { json: "embedAtlas", js: "embedAtlas", typ: u(undefined, u(r("EmbedAtlas"), null)) },
        { json: "enumTags", js: "enumTags", typ: a(r("EnumTagValue")) },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "padding", js: "padding", typ: 0 },
        { json: "pxHei", js: "pxHei", typ: 0 },
        { json: "pxWid", js: "pxWid", typ: 0 },
        { json: "relPath", js: "relPath", typ: u(undefined, u(null, "")) },
        { json: "savedSelections", js: "savedSelections", typ: a(m("any")) },
        { json: "spacing", js: "spacing", typ: 0 },
        { json: "tags", js: "tags", typ: a("") },
        { json: "tagsSourceEnumUid", js: "tagsSourceEnumUid", typ: u(undefined, u(0, null)) },
        { json: "tileGridSize", js: "tileGridSize", typ: 0 },
        { json: "uid", js: "uid", typ: 0 },
    ], false),
    "TileCustomMetadata": o([
        { json: "data", js: "data", typ: "" },
        { json: "tileId", js: "tileId", typ: 0 },
    ], false),
    "EnumTagValue": o([
        { json: "enumValueId", js: "enumValueId", typ: "" },
        { json: "tileIds", js: "tileIds", typ: a(0) },
    ], false),
    "EntityInstance": o([
        { json: "__grid", js: "__grid", typ: a(0) },
        { json: "__identifier", js: "__identifier", typ: "" },
        { json: "__pivot", js: "__pivot", typ: a(3.14) },
        { json: "__smartColor", js: "__smartColor", typ: "" },
        { json: "__tags", js: "__tags", typ: a("") },
        { json: "__tile", js: "__tile", typ: u(undefined, u(r("TilesetRectangle"), null)) },
        { json: "defUid", js: "defUid", typ: 0 },
        { json: "fieldInstances", js: "fieldInstances", typ: a(r("FieldInstance")) },
        { json: "height", js: "height", typ: 0 },
        { json: "iid", js: "iid", typ: "" },
        { json: "px", js: "px", typ: a(0) },
        { json: "width", js: "width", typ: 0 },
    ], false),
    "FieldInstance": o([
        { json: "__identifier", js: "__identifier", typ: "" },
        { json: "__tile", js: "__tile", typ: u(undefined, u(r("TilesetRectangle"), null)) },
        { json: "__type", js: "__type", typ: "" },
        { json: "__value", js: "__value", typ: "any" },
        { json: "defUid", js: "defUid", typ: 0 },
        { json: "realEditorValues", js: "realEditorValues", typ: a("any") },
    ], false),
    "ReferenceToAnEntityInstance": o([
        { json: "entityIid", js: "entityIid", typ: "" },
        { json: "layerIid", js: "layerIid", typ: "" },
        { json: "levelIid", js: "levelIid", typ: "" },
        { json: "worldIid", js: "worldIid", typ: "" },
    ], false),
    "GridPoint": o([
        { json: "cx", js: "cx", typ: 0 },
        { json: "cy", js: "cy", typ: 0 },
    ], false),
    "IntGridValueInstance": o([
        { json: "coordId", js: "coordId", typ: 0 },
        { json: "v", js: "v", typ: 0 },
    ], false),
    "LayerInstance": o([
        { json: "__cHei", js: "__cHei", typ: 0 },
        { json: "__cWid", js: "__cWid", typ: 0 },
        { json: "__gridSize", js: "__gridSize", typ: 0 },
        { json: "__identifier", js: "__identifier", typ: "" },
        { json: "__opacity", js: "__opacity", typ: 3.14 },
        { json: "__pxTotalOffsetX", js: "__pxTotalOffsetX", typ: 0 },
        { json: "__pxTotalOffsetY", js: "__pxTotalOffsetY", typ: 0 },
        { json: "__tilesetDefUid", js: "__tilesetDefUid", typ: u(undefined, u(0, null)) },
        { json: "__tilesetRelPath", js: "__tilesetRelPath", typ: u(undefined, u(null, "")) },
        { json: "__type", js: "__type", typ: "" },
        { json: "autoLayerTiles", js: "autoLayerTiles", typ: a(r("TileInstance")) },
        { json: "entityInstances", js: "entityInstances", typ: a(r("EntityInstance")) },
        { json: "gridTiles", js: "gridTiles", typ: a(r("TileInstance")) },
        { json: "iid", js: "iid", typ: "" },
        { json: "intGrid", js: "intGrid", typ: u(undefined, u(a(r("IntGridValueInstance")), null)) },
        { json: "intGridCsv", js: "intGridCsv", typ: a(0) },
        { json: "layerDefUid", js: "layerDefUid", typ: 0 },
        { json: "levelId", js: "levelId", typ: 0 },
        { json: "optionalRules", js: "optionalRules", typ: a(0) },
        { json: "overrideTilesetUid", js: "overrideTilesetUid", typ: u(undefined, u(0, null)) },
        { json: "pxOffsetX", js: "pxOffsetX", typ: 0 },
        { json: "pxOffsetY", js: "pxOffsetY", typ: 0 },
        { json: "seed", js: "seed", typ: 0 },
        { json: "visible", js: "visible", typ: true },
    ], false),
    "TileInstance": o([
        { json: "a", js: "a", typ: 3.14 },
        { json: "d", js: "d", typ: a(0) },
        { json: "f", js: "f", typ: 0 },
        { json: "px", js: "px", typ: a(0) },
        { json: "src", js: "src", typ: a(0) },
        { json: "t", js: "t", typ: 0 },
    ], false),
    "Level": o([
        { json: "__bgColor", js: "__bgColor", typ: "" },
        { json: "__bgPos", js: "__bgPos", typ: u(undefined, u(r("LevelBackgroundPosition"), null)) },
        { json: "__neighbours", js: "__neighbours", typ: a(r("NeighbourLevel")) },
        { json: "__smartColor", js: "__smartColor", typ: "" },
        { json: "bgColor", js: "bgColor", typ: u(undefined, u(null, "")) },
        { json: "bgPivotX", js: "bgPivotX", typ: 3.14 },
        { json: "bgPivotY", js: "bgPivotY", typ: 3.14 },
        { json: "bgPos", js: "bgPos", typ: u(undefined, u(r("BgPos"), null)) },
        { json: "bgRelPath", js: "bgRelPath", typ: u(undefined, u(null, "")) },
        { json: "externalRelPath", js: "externalRelPath", typ: u(undefined, u(null, "")) },
        { json: "fieldInstances", js: "fieldInstances", typ: a(r("FieldInstance")) },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "iid", js: "iid", typ: "" },
        { json: "layerInstances", js: "layerInstances", typ: u(undefined, u(a(r("LayerInstance")), null)) },
        { json: "pxHei", js: "pxHei", typ: 0 },
        { json: "pxWid", js: "pxWid", typ: 0 },
        { json: "uid", js: "uid", typ: 0 },
        { json: "useAutoIdentifier", js: "useAutoIdentifier", typ: true },
        { json: "worldDepth", js: "worldDepth", typ: 0 },
        { json: "worldX", js: "worldX", typ: 0 },
        { json: "worldY", js: "worldY", typ: 0 },
    ], false),
    "LevelBackgroundPosition": o([
        { json: "cropRect", js: "cropRect", typ: a(3.14) },
        { json: "scale", js: "scale", typ: a(3.14) },
        { json: "topLeftPx", js: "topLeftPx", typ: a(0) },
    ], false),
    "NeighbourLevel": o([
        { json: "dir", js: "dir", typ: "" },
        { json: "levelIid", js: "levelIid", typ: "" },
        { json: "levelUid", js: "levelUid", typ: u(undefined, u(0, null)) },
    ], false),
    "LdtkTableOfContentEntry": o([
        { json: "identifier", js: "identifier", typ: "" },
        { json: "instances", js: "instances", typ: a(r("ReferenceToAnEntityInstance")) },
    ], false),
    "World": o([
        { json: "defaultLevelHeight", js: "defaultLevelHeight", typ: 0 },
        { json: "defaultLevelWidth", js: "defaultLevelWidth", typ: 0 },
        { json: "identifier", js: "identifier", typ: "" },
        { json: "iid", js: "iid", typ: "" },
        { json: "levels", js: "levels", typ: a(r("Level")) },
        { json: "worldGridHeight", js: "worldGridHeight", typ: 0 },
        { json: "worldGridWidth", js: "worldGridWidth", typ: 0 },
        { json: "worldLayout", js: "worldLayout", typ: u(r("WorldLayout"), null) },
    ], false),
    "Checker": [
        "Horizontal",
        "None",
        "Vertical",
    ],
    "TileMode": [
        "Single",
        "Stamp",
    ],
    "When": [
        "AfterLoad",
        "AfterSave",
        "BeforeSave",
        "Manual",
    ],
    "AllowedRefs": [
        "Any",
        "OnlySame",
        "OnlySpecificEntity",
        "OnlyTags",
    ],
    "EditorDisplayMode": [
        "ArrayCountNoLabel",
        "ArrayCountWithLabel",
        "EntityTile",
        "Hidden",
        "LevelTile",
        "NameAndValue",
        "PointPath",
        "PointPathLoop",
        "PointStar",
        "Points",
        "RadiusGrid",
        "RadiusPx",
        "RefLinkBetweenCenters",
        "RefLinkBetweenPivots",
        "ValueOnly",
    ],
    "EditorDisplayPos": [
        "Above",
        "Beneath",
        "Center",
    ],
    "EditorLinkStyle": [
        "ArrowsLine",
        "CurvedArrow",
        "DashedLine",
        "StraightArrow",
        "ZigZag",
    ],
    "TextLanguageMode": [
        "LangC",
        "LangHaxe",
        "LangJS",
        "LangJson",
        "LangLog",
        "LangLua",
        "LangMarkdown",
        "LangPython",
        "LangRuby",
        "LangXml",
    ],
    "LimitBehavior": [
        "DiscardOldOnes",
        "MoveLastOne",
        "PreventAdding",
    ],
    "LimitScope": [
        "PerLayer",
        "PerLevel",
        "PerWorld",
    ],
    "RenderMode": [
        "Cross",
        "Ellipse",
        "Rectangle",
        "Tile",
    ],
    "TileRenderMode": [
        "Cover",
        "FitInside",
        "FullSizeCropped",
        "FullSizeUncropped",
        "NineSlice",
        "Repeat",
        "Stretch",
    ],
    "Type": [
        "AutoLayer",
        "Entities",
        "IntGrid",
        "Tiles",
    ],
    "EmbedAtlas": [
        "LdtkIcons",
    ],
    "BgPos": [
        "Contain",
        "Cover",
        "CoverDirty",
        "Repeat",
        "Unscaled",
    ],
    "WorldLayout": [
        "Free",
        "GridVania",
        "LinearHorizontal",
        "LinearVertical",
    ],
    "Flag": [
        "DiscardPreCsvIntGrid",
        "ExportPreCsvIntGridFormat",
        "IgnoreBackupSuggest",
        "MultiWorlds",
        "PrependIndexToLevelFileNames",
        "UseMultilinesType",
    ],
    "IdentifierStyle": [
        "Capitalize",
        "Free",
        "Lowercase",
        "Uppercase",
    ],
    "ImageExportMode": [
        "LayersAndLevels",
        "None",
        "OneImagePerLayer",
        "OneImagePerLevel",
    ],
};





/**
 * This file is a JSON schema of files created by LDtk level editor (https://ldtk.io).
 *
 * This is the root of any Project JSON file. It contains:  - the project settings, - an
 * array of levels, - a group of definitions (that can probably be safely ignored for most
 * users).
 * @typedef {Object} LDTKProject
 * @property {ForcedRefs} [__FORCED_REFS] 
 * This object is not actually used by LDtk. It ONLY exists to force explicit references to
 * all types, to make sure QuickType finds them and integrate all of them. Otherwise,
 * Quicktype will drop types that are not explicitely used.
 * @property {number} appBuildId 
 * LDtk application build identifier.<br/>  This is only used to identify the LDtk version
 * that generated this particular project file, which can be useful for specific bug fixing.
 * Note that the build identifier is just the date of the release, so it's not unique to
 * each user (one single global ID per LDtk public release), and as a result, completely
 * anonymous.
 * @property {number} backupLimit 
 * Number of backup files to keep, if the `backupOnSave` is TRUE
 * @property {boolean} backupOnSave 
 * If TRUE, an extra copy of the project will be created in a sub folder, when saving.
 * @property {null|string} [backupRelPath] 
 * Target relative path to store backup files
 * @property {string} bgColor 
 * Project background color
 * @property {LdtkCustomCommand[]} customCommands 
 * An array of command lines that can be ran manually by the user
 * @property {number} defaultGridSize 
 * Default grid size for new layers
 * @property {string} defaultLevelBgColor 
 * Default background color of levels
 * @property {number|null} [defaultLevelHeight] 
 * **WARNING**: this field will move to the `worlds` array after the "multi-worlds" update.
 * It will then be `null`. You can enable the Multi-worlds advanced project option to enable
 * the change immediately.<br/><br/>  Default new level height
 * @property {number|null} [defaultLevelWidth] 
 * **WARNING**: this field will move to the `worlds` array after the "multi-worlds" update.
 * It will then be `null`. You can enable the Multi-worlds advanced project option to enable
 * the change immediately.<br/><br/>  Default new level width
 * @property {number} defaultPivotX 
 * Default X pivot (0 to 1) for new entities
 * @property {number} defaultPivotY 
 * Default Y pivot (0 to 1) for new entities
 * @property {Definitions} defs 
 * A structure containing all the definitions of this project
 * @property {string} dummyWorldIid 
 * If the project isn't in MultiWorlds mode, this is the IID of the internal "dummy" World.
 * @property {boolean} exportLevelBg 
 * If TRUE, the exported PNGs will include the level background (color or image).
 * @property {boolean|null} [exportPng] 
 * **WARNING**: this deprecated value is no longer exported since version 0.9.3  Replaced
 * by: `imageExportMode`
 * @property {boolean} exportTiled 
 * If TRUE, a Tiled compatible file will also be generated along with the LDtk JSON file
 * (default is FALSE)
 * @property {boolean} externalLevels 
 * If TRUE, one file will be saved for the project (incl. all its definitions) and one file
 * in a sub-folder for each level.
 * @property {Flag[]} flags 
 * An array containing various advanced flags (ie. options or other states). Possible
 * values: `DiscardPreCsvIntGrid`, `ExportPreCsvIntGridFormat`, `IgnoreBackupSuggest`,
 * `PrependIndexToLevelFileNames`, `MultiWorlds`, `UseMultilinesType`
 * @property {IdentifierStyle} identifierStyle 
 * Naming convention for Identifiers (first-letter uppercase, full uppercase etc.) Possible
 * values: `Capitalize`, `Uppercase`, `Lowercase`, `Free`
 * @property {string} iid 
 * Unique project identifier
 * @property {ImageExportMode} imageExportMode 
 * "Image export" option when saving project. Possible values: `None`, `OneImagePerLayer`,
 * `OneImagePerLevel`, `LayersAndLevels`
 * @property {string} jsonVersion 
 * File format version
 * @property {string} levelNamePattern 
 * The default naming convention for level identifiers.
 * @property {Level[]} levels 
 * All levels. The order of this array is only relevant in `LinearHorizontal` and
 * `linearVertical` world layouts (see `worldLayout` value).<br/>  Otherwise, you should
 * refer to the `worldX`,`worldY` coordinates of each Level.
 * @property {boolean} minifyJson 
 * If TRUE, the Json is partially minified (no indentation, nor line breaks, default is
 * FALSE)
 * @property {number} nextUid 
 * Next Unique integer ID available
 * @property {null|string} [pngFilePattern] 
 * File naming pattern for exported PNGs
 * @property {boolean} simplifiedExport 
 * If TRUE, a very simplified will be generated on saving, for quicker & easier engine
 * integration.
 * @property {LdtkTableOfContentEntry[]} toc 
 * All instances of entities that have their `exportToToc` flag enabled are listed in this
 * array.
 * @property {null|string} [tutorialDesc] 
 * This optional description is used by LDtk Samples to show up some informations and
 * instructions.
 * @property {number|null} [worldGridHeight] 
 * **WARNING**: this field will move to the `worlds` array after the "multi-worlds" update.
 * It will then be `null`. You can enable the Multi-worlds advanced project option to enable
 * the change immediately.<br/><br/>  Height of the world grid in pixels.
 * @property {number|null} [worldGridWidth] 
 * **WARNING**: this field will move to the `worlds` array after the "multi-worlds" update.
 * It will then be `null`. You can enable the Multi-worlds advanced project option to enable
 * the change immediately.<br/><br/>  Width of the world grid in pixels.
 * @property {WorldLayout|null} [worldLayout] 
 * **WARNING**: this field will move to the `worlds` array after the "multi-worlds" update.
 * It will then be `null`. You can enable the Multi-worlds advanced project option to enable
 * the change immediately.<br/><br/>  An enum that describes how levels are organized in
 * this project (ie. linearly or in a 2D space). Possible values: &lt;`null`&gt;, `Free`,
 * `GridVania`, `LinearHorizontal`, `LinearVertical`
 * @property {World[]} worlds 
 * This array will be empty, unless you enable the Multi-Worlds in the project advanced
 * settings.<br/><br/> - in current version, a LDtk project file can only contain a single
 * world with multiple levels in it. In this case, levels and world layout related settings
 * are stored in the root of the JSON.<br/> - with "Multi-worlds" enabled, there will be a
 * `worlds` array in root, each world containing levels and layout settings. Basically, it's
 * pretty much only about moving the `levels` array to the `worlds` array, along with world
 * layout related values (eg. `worldGridWidth` etc).<br/><br/>If you want to start
 * supporting this future update easily, please refer to this documentation:
 * https://github.com/deepnight/ldtk/issues/231
 */
/**
 * This object is not actually used by LDtk. It ONLY exists to force explicit references to
 * all types, to make sure QuickType finds them and integrate all of them. Otherwise,
 * Quicktype will drop types that are not explicitely used.
 * @typedef {Object} ForcedRefs
 * @property {AutoLayerRuleGroup} [AutoLayerRuleGroup]
 * @property {AutoLayerRuleDefinition} [AutoRuleDef]
 * @property {LdtkCustomCommand} [CustomCommand]
 * @property {Definitions} [Definitions]
 * @property {EntityDefinition} [EntityDef]
 * @property {EntityInstance} [EntityInstance]
 * @property {ReferenceToAnEntityInstance} [EntityReferenceInfos]
 * @property {EnumDefinition} [EnumDef]
 * @property {EnumValueDefinition} [EnumDefValues]
 * @property {EnumTagValue} [EnumTagValue]
 * @property {FieldDefinition} [FieldDef]
 * @property {FieldInstance} [FieldInstance]
 * @property {GridPoint} [GridPoint]
 * @property {IntGridValueDefinition} [IntGridValueDef]
 * @property {IntGridValueInstance} [IntGridValueInstance]
 * @property {LayerDefinition} [LayerDef]
 * @property {LayerInstance} [LayerInstance]
 * @property {Level} [Level]
 * @property {LevelBackgroundPosition} [LevelBgPosInfos]
 * @property {NeighbourLevel} [NeighbourLevel]
 * @property {LdtkTableOfContentEntry} [TableOfContentEntry]
 * @property {TileInstance} [Tile]
 * @property {TileCustomMetadata} [TileCustomMetadata]
 * @property {TilesetDefinition} [TilesetDef]
 * @property {TilesetRectangle} [TilesetRect]
 * @property {World} [World] 
 */
/**
 * @typedef {Object} AutoLayerRuleGroup
 * @property {boolean} active
 * @property {boolean|null} [collapsed] 
 * *This field was removed in 1.0.0 and should no longer be used.
 * @property {boolean} isOptional
 * @property {string} name
 * @property {AutoLayerRuleDefinition[]} rules
 * @property {number} uid
 * @property {boolean} usesWizard 
 */
/**
 * This complex section isn't meant to be used by game devs at all, as these rules are
 * completely resolved internally by the editor before any saving. You should just ignore
 * this part.
 * @typedef {Object} AutoLayerRuleDefinition
 * @property {boolean} active 
 * If FALSE, the rule effect isn't applied, and no tiles are generated.
 * @property {number} alpha
 * @property {boolean} breakOnMatch 
 * When TRUE, the rule will prevent other rules to be applied in the same cell if it matches
 * (TRUE by default).
 * @property {number} chance 
 * Chances for this rule to be applied (0 to 1)
 * @property {Checker} checker 
 * Checker mode Possible values: `None`, `Horizontal`, `Vertical`
 * @property {boolean} flipX 
 * If TRUE, allow rule to be matched by flipping its pattern horizontally
 * @property {boolean} flipY 
 * If TRUE, allow rule to be matched by flipping its pattern vertically
 * @property {number|null} [outOfBoundsValue] 
 * Default IntGrid value when checking cells outside of level bounds
 * @property {number[]} pattern 
 * Rule pattern (size x size)
 * @property {boolean} perlinActive 
 * If TRUE, enable Perlin filtering to only apply rule on specific random area
 * @property {number} perlinOctaves
 * @property {number} perlinScale
 * @property {number} perlinSeed
 * @property {number} pivotX 
 * X pivot of a tile stamp (0-1)
 * @property {number} pivotY 
 * Y pivot of a tile stamp (0-1)
 * @property {number} size 
 * Pattern width & height. Should only be 1,3,5 or 7.
 * @property {number[]} tileIds 
 * Array of all the tile IDs. They are used randomly or as stamps, based on `tileMode` value.
 * @property {TileMode} tileMode 
 * Defines how tileIds array is used Possible values: `Single`, `Stamp`
 * @property {number} tileRandomXMax 
 * Max random offset for X tile pos
 * @property {number} tileRandomXMin 
 * Min random offset for X tile pos
 * @property {number} tileRandomYMax 
 * Max random offset for Y tile pos
 * @property {number} tileRandomYMin 
 * Min random offset for Y tile pos
 * @property {number} tileXOffset 
 * Tile X offset
 * @property {number} tileYOffset 
 * Tile Y offset
 * @property {number} uid 
 * Unique Int identifier
 * @property {number} xModulo 
 * X cell coord modulo
 * @property {number} xOffset 
 * X cell start offset
 * @property {number} yModulo 
 * Y cell coord modulo
 * @property {number} yOffset 
 * Y cell start offset
 */
/**
 * @typedef {Object} LdtkCustomCommand
 * @property {string} command
 * @property {When} when 
 * Possible values: `Manual`, `AfterLoad`, `BeforeSave`, `AfterSave`
 */
/**
 * If you're writing your own LDtk importer, you should probably just ignore *most* stuff in
 * the `defs` section, as it contains data that are mostly important to the editor. To keep
 * you away from the `defs` section and avoid some unnecessary JSON parsing, important data
 * from definitions is often duplicated in fields prefixed with a double underscore (eg.
 * `__identifier` or `__type`).  The 2 only definition types you might need here are
 * **Tilesets** and **Enums**.
 *
 * A structure containing all the definitions of this project
 * @typedef {Object} Definitions
 * @property {EntityDefinition[]} entities 
 * All entities definitions, including their custom fields
 * @property {EnumDefinition[]} enums 
 * All internal enums
 * @property {EnumDefinition[]} externalEnums 
 * Note: external enums are exactly the same as `enums`, except they have a `relPath` to
 * point to an external source file.
 * @property {LayerDefinition[]} layers 
 * All layer definitions
 * @property {FieldDefinition[]} levelFields 
 * All custom fields available to all levels.
 * @property {TilesetDefinition[]} tilesets 
 * All tilesets
 */
/**
 * @typedef {Object} EntityDefinition
 * @property {string} color 
 * Base entity color
 * @property {null|string} [doc] 
 * User defined documentation for this element to provide help/tips to level designers.
 * @property {boolean} exportToToc 
 * If enabled, all instances of this entity will be listed in the project "Table of content"
 * object.
 * @property {FieldDefinition[]} fieldDefs 
 * Array of field definitions
 * @property {number} fillOpacity
 * @property {number} height 
 * Pixel height
 * @property {boolean} hollow
 * @property {string} identifier 
 * User defined unique identifier
 * @property {boolean} keepAspectRatio 
 * Only applies to entities resizable on both X/Y. If TRUE, the entity instance width/height
 * will keep the same aspect ratio as the definition.
 * @property {LimitBehavior} limitBehavior 
 * Possible values: `DiscardOldOnes`, `PreventAdding`, `MoveLastOne`
 * @property {LimitScope} limitScope 
 * If TRUE, the maxCount is a "per world" limit, if FALSE, it's a "per level". Possible
 * values: `PerLayer`, `PerLevel`, `PerWorld`
 * @property {number} lineOpacity
 * @property {number} maxCount 
 * Max instances count
 * @property {number[]} nineSliceBorders 
 * An array of 4 dimensions for the up/right/down/left borders (in this order) when using
 * 9-slice mode for `tileRenderMode`.<br/>  If the tileRenderMode is not NineSlice, then
 * this array is empty.<br/>  See: https://en.wikipedia.org/wiki/9-slice_scaling
 * @property {number} pivotX 
 * Pivot X coordinate (from 0 to 1.0)
 * @property {number} pivotY 
 * Pivot Y coordinate (from 0 to 1.0)
 * @property {RenderMode} renderMode 
 * Possible values: `Rectangle`, `Ellipse`, `Tile`, `Cross`
 * @property {boolean} resizableX 
 * If TRUE, the entity instances will be resizable horizontally
 * @property {boolean} resizableY 
 * If TRUE, the entity instances will be resizable vertically
 * @property {boolean} showName 
 * Display entity name in editor
 * @property {string[]} tags 
 * An array of strings that classifies this entity
 * @property {number|null} [tileId] 
 * **WARNING**: this deprecated value is no longer exported since version 1.2.0  Replaced
 * by: `tileRect`
 * @property {number} tileOpacity
 * @property {TilesetRectangle|null} [tileRect] 
 * An object representing a rectangle from an existing Tileset
 * @property {TileRenderMode} tileRenderMode 
 * An enum describing how the the Entity tile is rendered inside the Entity bounds. Possible
 * values: `Cover`, `FitInside`, `Repeat`, `Stretch`, `FullSizeCropped`,
 * `FullSizeUncropped`, `NineSlice`
 * @property {number|null} [tilesetId] 
 * Tileset ID used for optional tile display
 * @property {number} uid 
 * Unique Int identifier
 * @property {number} width 
 * Pixel width
 */
/**
 * This section is mostly only intended for the LDtk editor app itself. You can safely
 * ignore it.
 * @typedef {Object} FieldDefinition
 * @property {string} __type 
 * Human readable value type. Possible values: `Int, Float, String, Bool, Color,
 * ExternEnum.XXX, LocalEnum.XXX, Point, FilePath`.<br/>  If the field is an array, this
 * field will look like `Array<...>` (eg. `Array<Int>`, `Array<Point>` etc.)<br/>  NOTE: if
 * you enable the advanced option **Use Multilines type**, you will have "*Multilines*"
 * instead of "*String*" when relevant.
 * @property {string[]|null} [acceptFileTypes] 
 * Optional list of accepted file extensions for FilePath value type. Includes the dot:
 * `.ext`
 * @property {AllowedRefs} allowedRefs 
 * Possible values: `Any`, `OnlySame`, `OnlyTags`, `OnlySpecificEntity`
 * @property {number|null} [allowedRefsEntityUid]
 * @property {string[]} allowedRefTags
 * @property {boolean} allowOutOfLevelRef
 * @property {number|null} [arrayMaxLength] 
 * Array max length
 * @property {number|null} [arrayMinLength] 
 * Array min length
 * @property {boolean} autoChainRef
 * @property {boolean} canBeNull 
 * TRUE if the value can be null. For arrays, TRUE means it can contain null values
 * (exception: array of Points can't have null values).
 * @property {any} [defaultOverride] 
 * Default value if selected value is null or invalid.
 * @property {null|string} [doc] 
 * User defined documentation for this field to provide help/tips to level designers about
 * accepted values.
 * @property {boolean} editorAlwaysShow
 * @property {boolean} editorCutLongValues
 * @property {EditorDisplayMode} editorDisplayMode 
 * Possible values: `Hidden`, `ValueOnly`, `NameAndValue`, `EntityTile`, `LevelTile`,
 * `Points`, `PointStar`, `PointPath`, `PointPathLoop`, `RadiusPx`, `RadiusGrid`,
 * `ArrayCountWithLabel`, `ArrayCountNoLabel`, `RefLinkBetweenPivots`,
 * `RefLinkBetweenCenters`
 * @property {EditorDisplayPos} editorDisplayPos 
 * Possible values: `Above`, `Center`, `Beneath`
 * @property {number} editorDisplayScale
 * @property {EditorLinkStyle} editorLinkStyle 
 * Possible values: `ZigZag`, `StraightArrow`, `CurvedArrow`, `ArrowsLine`, `DashedLine`
 * @property {boolean} editorShowInWorld
 * @property {null|string} [editorTextPrefix]
 * @property {null|string} [editorTextSuffix]
 * @property {string} identifier 
 * User defined unique identifier
 * @property {boolean} isArray 
 * TRUE if the value is an array of multiple values
 * @property {number|null} [max] 
 * Max limit for value, if applicable
 * @property {number|null} [min] 
 * Min limit for value, if applicable
 * @property {null|string} [regex] 
 * Optional regular expression that needs to be matched to accept values. Expected format:
 * `/some_reg_ex/g`, with optional "i" flag.
 * @property {boolean} symmetricalRef
 * @property {TextLanguageMode|null} [textLanguageMode] 
 * Possible values: &lt;`null`&gt;, `LangPython`, `LangRuby`, `LangJS`, `LangLua`, `LangC`,
 * `LangHaxe`, `LangMarkdown`, `LangJson`, `LangXml`, `LangLog`
 * @property {number|null} [tilesetUid] 
 * UID of the tileset used for a Tile
 * @property {string} type 
 * Internal enum representing the possible field types. Possible values: F_Int, F_Float,
 * F_String, F_Text, F_Bool, F_Color, F_Enum(...), F_Point, F_Path, F_EntityRef, F_Tile
 * @property {number} uid 
 * Unique Int identifier
 * @property {boolean} useForSmartColor 
 * If TRUE, the color associated with this field will override the Entity or Level default
 * color in the editor UI. For Enum fields, this would be the color associated to their
 * values.
 */
/**
 * This object represents a custom sub rectangle in a Tileset image.
 * @typedef {Object} TilesetRectangle
 * @property {number} h 
 * Height in pixels
 * @property {number} tilesetUid 
 * UID of the tileset
 * @property {number} w 
 * Width in pixels
 * @property {number} x 
 * X pixels coordinate of the top-left corner in the Tileset image
 * @property {number} y 
 * Y pixels coordinate of the top-left corner in the Tileset image
 */
/**
 * @typedef {Object} EnumDefinition
 * @property {null|string} [externalFileChecksum]
 * @property {null|string} [externalRelPath] 
 * Relative path to the external file providing this Enum
 * @property {number|null} [iconTilesetUid] 
 * Tileset UID if provided
 * @property {string} identifier 
 * User defined unique identifier
 * @property {string[]} tags 
 * An array of user-defined tags to organize the Enums
 * @property {number} uid 
 * Unique Int identifier
 * @property {EnumValueDefinition[]} values 
 * All possible enum values, with their optional Tile infos.
 */
/**
 * @typedef {Object} EnumValueDefinition
 * @property {number[]|null} [__tileSrcRect] 
 * **WARNING**: this deprecated value will be *removed* completely on version 1.4.0+
 * Replaced by: `tileRect`
 * @property {number} color 
 * Optional color
 * @property {string} id 
 * Enum value
 * @property {number|null} [tileId] 
 * **WARNING**: this deprecated value will be *removed* completely on version 1.4.0+
 * Replaced by: `tileRect`
 * @property {TilesetRectangle|null} [tileRect] 
 * Optional tileset rectangle to represents this value
 */
/**
 * @typedef {Object} LayerDefinition
 * @property {string} __type 
 * Type of the layer (*IntGrid, Entities, Tiles or AutoLayer*)
 * @property {AutoLayerRuleGroup[]} autoRuleGroups 
 * Contains all the auto-layer rule definitions.
 * @property {number|null} [autoSourceLayerDefUid]
 * @property {number|null} [autoTilesetDefUid] 
 * **WARNING**: this deprecated value is no longer exported since version 1.2.0  Replaced
 * by: `tilesetDefUid`
 * @property {boolean} canSelectWhenInactive 
 * Allow editor selections when the layer is not currently active.
 * @property {number} displayOpacity 
 * Opacity of the layer (0 to 1.0)
 * @property {null|string} [doc] 
 * User defined documentation for this element to provide help/tips to level designers.
 * @property {string[]} excludedTags 
 * An array of tags to forbid some Entities in this layer
 * @property {number} gridSize 
 * Width and height of the grid in pixels
 * @property {number} guideGridHei 
 * Height of the optional "guide" grid in pixels
 * @property {number} guideGridWid 
 * Width of the optional "guide" grid in pixels
 * @property {boolean} hideFieldsWhenInactive
 * @property {boolean} hideInList 
 * Hide the layer from the list on the side of the editor view.
 * @property {string} identifier 
 * User defined unique identifier
 * @property {number} inactiveOpacity 
 * Alpha of this layer when it is not the active one.
 * @property {IntGridValueDefinition[]} intGridValues 
 * An array that defines extra optional info for each IntGrid value.<br/>  WARNING: the
 * array order is not related to actual IntGrid values! As user can re-order IntGrid values
 * freely, you may value "2" before value "1" in this array.
 * @property {number} parallaxFactorX 
 * Parallax horizontal factor (from -1 to 1, defaults to 0) which affects the scrolling
 * speed of this layer, creating a fake 3D (parallax) effect.
 * @property {number} parallaxFactorY 
 * Parallax vertical factor (from -1 to 1, defaults to 0) which affects the scrolling speed
 * of this layer, creating a fake 3D (parallax) effect.
 * @property {boolean} parallaxScaling 
 * If true (default), a layer with a parallax factor will also be scaled up/down accordingly.
 * @property {number} pxOffsetX 
 * X offset of the layer, in pixels (IMPORTANT: this should be added to the `LayerInstance`
 * optional offset)
 * @property {number} pxOffsetY 
 * Y offset of the layer, in pixels (IMPORTANT: this should be added to the `LayerInstance`
 * optional offset)
 * @property {boolean} renderInWorldView 
 * If TRUE, the content of this layer will be used when rendering levels in a simplified way
 * for the world view
 * @property {string[]} requiredTags 
 * An array of tags to filter Entities that can be added to this layer
 * @property {number} tilePivotX 
 * If the tiles are smaller or larger than the layer grid, the pivot value will be used to
 * position the tile relatively its grid cell.
 * @property {number} tilePivotY 
 * If the tiles are smaller or larger than the layer grid, the pivot value will be used to
 * position the tile relatively its grid cell.
 * @property {number|null} [tilesetDefUid] 
 * Reference to the default Tileset UID being used by this layer definition.<br/>
 * **WARNING**: some layer *instances* might use a different tileset. So most of the time,
 * you should probably use the `__tilesetDefUid` value found in layer instances.<br/>  Note:
 * since version 1.0.0, the old `autoTilesetDefUid` was removed and merged into this value.
 * @property {Type} type 
 * Type of the layer as Haxe Enum Possible values: `IntGrid`, `Entities`, `Tiles`,
 * `AutoLayer`
 * @property {null|string} [uiColor] 
 * User defined color for the UI
 * @property {number} uid 
 * Unique Int identifier
 */
/**
 * IntGrid value definition
 * @typedef {Object} IntGridValueDefinition
 * @property {string} color
 * @property {null|string} [identifier] 
 * User defined unique identifier
 * @property {number} value 
 * The IntGrid value itself
 */
/**
 * The `Tileset` definition is the most important part among project definitions. It
 * contains some extra informations about each integrated tileset. If you only had to parse
 * one definition section, that would be the one.
 * @typedef {Object} TilesetDefinition
 * @property {number} __cHei 
 * Grid-based height
 * @property {number} __cWid 
 * Grid-based width
 * @property {{[key:string]:any}|null} [cachedPixelData] 
 * The following data is used internally for various optimizations. It's always synced with
 * source image changes.
 * @property {TileCustomMetadata[]} customData 
 * An array of custom tile metadata
 * @property {EmbedAtlas|null} [embedAtlas] 
 * If this value is set, then it means that this atlas uses an internal LDtk atlas image
 * instead of a loaded one. Possible values: &lt;`null`&gt;, `LdtkIcons`
 * @property {EnumTagValue[]} enumTags 
 * Tileset tags using Enum values specified by `tagsSourceEnumId`. This array contains 1
 * element per Enum value, which contains an array of all Tile IDs that are tagged with it.
 * @property {string} identifier 
 * User defined unique identifier
 * @property {number} padding 
 * Distance in pixels from image borders
 * @property {number} pxHei 
 * Image height in pixels
 * @property {number} pxWid 
 * Image width in pixels
 * @property {null|string} [relPath] 
 * Path to the source file, relative to the current project JSON file<br/>  It can be null
 * if no image was provided, or when using an embed atlas.
 * @property {{[key:string]:any}[]} savedSelections 
 * Array of group of tiles selections, only meant to be used in the editor
 * @property {number} spacing 
 * Space in pixels between all tiles
 * @property {string[]} tags 
 * An array of user-defined tags to organize the Tilesets
 * @property {number|null} [tagsSourceEnumUid] 
 * Optional Enum definition UID used for this tileset meta-data
 * @property {number} tileGridSize
 * @property {number} uid 
 * Unique Intidentifier
 */
/**
 * In a tileset definition, user defined meta-data of a tile.
 * @typedef {Object} TileCustomMetadata
 * @property {string} data
 * @property {number} tileId 
 */
/**
 * In a tileset definition, enum based tag infos
 * @typedef {Object} EnumTagValue
 * @property {string} enumValueId
 * @property {number[]} tileIds 
 */
/**
 * @typedef {Object} EntityInstance
 * @property {number[]} __grid 
 * Grid-based coordinates (`[x,y]` format)
 * @property {string} __identifier 
 * Entity definition identifier
 * @property {number[]} __pivot 
 * Pivot coordinates  (`[x,y]` format, values are from 0 to 1) of the Entity
 * @property {string} __smartColor 
 * The entity "smart" color, guessed from either Entity definition, or one its field
 * instances.
 * @property {string[]} __tags 
 * Array of tags defined in this Entity definition
 * @property {TilesetRectangle|null} [__tile] 
 * Optional TilesetRect used to display this entity (it could either be the default Entity
 * tile, or some tile provided by a field value, like an Enum).
 * @property {number} defUid 
 * Reference of the **Entity definition** UID
 * @property {FieldInstance[]} fieldInstances 
 * An array of all custom fields and their values.
 * @property {number} height 
 * Entity height in pixels. For non-resizable entities, it will be the same as Entity
 * definition.
 * @property {string} iid 
 * Unique instance identifier
 * @property {number[]} px 
 * Pixel coordinates (`[x,y]` format) in current level coordinate space. Don't forget
 * optional layer offsets, if they exist!
 * @property {number} width 
 * Entity width in pixels. For non-resizable entities, it will be the same as Entity
 * definition.
 */
/**
 * @typedef {Object} FieldInstance
 * @property {string} __identifier 
 * Field definition identifier
 * @property {TilesetRectangle|null} [__tile] 
 * Optional TilesetRect used to display this field (this can be the field own Tile, or some
 * other Tile guessed from the value, like an Enum).
 * @property {string} __type 
 * Type of the field, such as `Int`, `Float`, `String`, `Enum(my_enum_name)`, `Bool`,
 * etc.<br/>  NOTE: if you enable the advanced option **Use Multilines type**, you will have
 * "*Multilines*" instead of "*String*" when relevant.
 * @property {any} __value 
 * Actual value of the field instance. The value type varies, depending on `__type`:<br/>
 * - For **classic types** (ie. Integer, Float, Boolean, String, Text and FilePath), you
 * just get the actual value with the expected type.<br/>   - For **Color**, the value is an
 * hexadecimal string using "#rrggbb" format.<br/>   - For **Enum**, the value is a String
 * representing the selected enum value.<br/>   - For **Point**, the value is a
 * [GridPoint](#ldtk-GridPoint) object.<br/>   - For **Tile**, the value is a
 * [TilesetRect](#ldtk-TilesetRect) object.<br/>   - For **EntityRef**, the value is an
 * [EntityReferenceInfos](#ldtk-EntityReferenceInfos) object.<br/><br/>  If the field is an
 * array, then this `__value` will also be a JSON array.
 * @property {number} defUid 
 * Reference of the **Field definition** UID
 * @property {any[]} realEditorValues 
 * Editor internal raw values
 */
/**
 * This object describes the "location" of an Entity instance in the project worlds.
 * @typedef {Object} ReferenceToAnEntityInstance
 * @property {string} entityIid 
 * IID of the refered EntityInstance
 * @property {string} layerIid 
 * IID of the LayerInstance containing the refered EntityInstance
 * @property {string} levelIid 
 * IID of the Level containing the refered EntityInstance
 * @property {string} worldIid 
 * IID of the World containing the refered EntityInstance
 */
/**
 * This object is just a grid-based coordinate used in Field values.
 * @typedef {Object} GridPoint
 * @property {number} cx 
 * X grid-based coordinate
 * @property {number} cy 
 * Y grid-based coordinate
 */
/**
 * IntGrid value instance
 * @typedef {Object} IntGridValueInstance
 * @property {number} coordId 
 * Coordinate ID in the layer grid
 * @property {number} v 
 * IntGrid value
 */
/**
 * @typedef {Object} LayerInstance
 * @property {number} __cHei 
 * Grid-based height
 * @property {number} __cWid 
 * Grid-based width
 * @property {number} __gridSize 
 * Grid size
 * @property {string} __identifier 
 * Layer definition identifier
 * @property {number} __opacity 
 * Layer opacity as Float [0-1]
 * @property {number} __pxTotalOffsetX 
 * Total layer X pixel offset, including both instance and definition offsets.
 * @property {number} __pxTotalOffsetY 
 * Total layer Y pixel offset, including both instance and definition offsets.
 * @property {number|null} [__tilesetDefUid] 
 * The definition UID of corresponding Tileset, if any.
 * @property {null|string} [__tilesetRelPath] 
 * The relative path to corresponding Tileset, if any.
 * @property {string} __type 
 * Layer type (possible values: IntGrid, Entities, Tiles or AutoLayer)
 * @property {TileInstance[]} autoLayerTiles 
 * An array containing all tiles generated by Auto-layer rules. The array is already sorted
 * in display order (ie. 1st tile is beneath 2nd, which is beneath 3rd etc.).<br/><br/>
 * Note: if multiple tiles are stacked in the same cell as the result of different rules,
 * all tiles behind opaque ones will be discarded.
 * @property {EntityInstance[]} entityInstances
 * @property {TileInstance[]} gridTiles
 * @property {string} iid 
 * Unique layer instance identifier
 * @property {IntGridValueInstance[]|null} [intGrid] 
 * **WARNING**: this deprecated value is no longer exported since version 1.0.0  Replaced
 * by: `intGridCsv`
 * @property {number[]} intGridCsv 
 * A list of all values in the IntGrid layer, stored in CSV format (Comma Separated
 * Values).<br/>  Order is from left to right, and top to bottom (ie. first row from left to
 * right, followed by second row, etc).<br/>  `0` means "empty cell" and IntGrid values
 * start at 1.<br/>  The array size is `__cWid` x `__cHei` cells.
 * @property {number} layerDefUid 
 * Reference the Layer definition UID
 * @property {number} levelId 
 * Reference to the UID of the level containing this layer instance
 * @property {number[]} optionalRules 
 * An Array containing the UIDs of optional rules that were enabled in this specific layer
 * instance.
 * @property {number|null} [overrideTilesetUid] 
 * This layer can use another tileset by overriding the tileset UID here.
 * @property {number} pxOffsetX 
 * X offset in pixels to render this layer, usually 0 (IMPORTANT: this should be added to
 * the `LayerDef` optional offset, so you should probably prefer using `__pxTotalOffsetX`
 * which contains the total offset value)
 * @property {number} pxOffsetY 
 * Y offset in pixels to render this layer, usually 0 (IMPORTANT: this should be added to
 * the `LayerDef` optional offset, so you should probably prefer using `__pxTotalOffsetX`
 * which contains the total offset value)
 * @property {number} seed 
 * Random seed used for Auto-Layers rendering
 * @property {boolean} visible 
 * Layer instance visibility
 */
/**
 * This structure represents a single tile from a given Tileset.
 * @typedef {Object} TileInstance
 * @property {number} a 
 * Alpha/opacity of the tile (0-1, defaults to 1)
 * @property {number[]} d 
 * Internal data used by the editor.<br/>  For auto-layer tiles: `[ruleId, coordId]`.<br/>
 * For tile-layer tiles: `[coordId]`.
 * @property {number} f 
 * "Flip bits", a 2-bits integer to represent the mirror transformations of the tile.<br/>
 * - Bit 0 = X flip<br/>   - Bit 1 = Y flip<br/>   Examples: f=0 (no flip), f=1 (X flip
 * only), f=2 (Y flip only), f=3 (both flips)
 * @property {number[]} px 
 * Pixel coordinates of the tile in the **layer** (`[x,y]` format). Don't forget optional
 * layer offsets, if they exist!
 * @property {number[]} src 
 * Pixel coordinates of the tile in the **tileset** (`[x,y]` format)
 * @property {number} t 
 * The *Tile ID* in the corresponding tileset.
 */
/**
 * This section contains all the level data. It can be found in 2 distinct forms, depending
 * on Project current settings:  - If "*Separate level files*" is **disabled** (default):
 * full level data is *embedded* inside the main Project JSON file, - If "*Separate level
 * files*" is **enabled**: level data is stored in *separate* standalone `.ldtkl` files (one
 * per level). In this case, the main Project JSON file will still contain most level data,
 * except heavy sections, like the `layerInstances` array (which will be null). The
 * `externalRelPath` string points to the `ldtkl` file.  A `ldtkl` file is just a JSON file
 * containing exactly what is described below.
 * @typedef {Object} Level
 * @property {string} __bgColor 
 * Background color of the level (same as `bgColor`, except the default value is
 * automatically used here if its value is `null`)
 * @property {LevelBackgroundPosition|null} [__bgPos] 
 * Position informations of the background image, if there is one.
 * @property {NeighbourLevel[]} __neighbours 
 * An array listing all other levels touching this one on the world map.<br/>  Only relevant
 * for world layouts where level spatial positioning is manual (ie. GridVania, Free). For
 * Horizontal and Vertical layouts, this array is always empty.
 * @property {string} __smartColor 
 * The "guessed" color for this level in the editor, decided using either the background
 * color or an existing custom field.
 * @property {null|string} [bgColor] 
 * Background color of the level. If `null`, the project `defaultLevelBgColor` should be
 * used.
 * @property {number} bgPivotX 
 * Background image X pivot (0-1)
 * @property {number} bgPivotY 
 * Background image Y pivot (0-1)
 * @property {BgPos|null} [bgPos] 
 * An enum defining the way the background image (if any) is positioned on the level. See
 * `__bgPos` for resulting position info. Possible values: &lt;`null`&gt;, `Unscaled`,
 * `Contain`, `Cover`, `CoverDirty`, `Repeat`
 * @property {null|string} [bgRelPath] 
 * The *optional* relative path to the level background image.
 * @property {null|string} [externalRelPath] 
 * This value is not null if the project option "*Save levels separately*" is enabled. In
 * this case, this **relative** path points to the level Json file.
 * @property {FieldInstance[]} fieldInstances 
 * An array containing this level custom field values.
 * @property {string} identifier 
 * User defined unique identifier
 * @property {string} iid 
 * Unique instance identifier
 * @property {LayerInstance[]|null} [layerInstances] 
 * An array containing all Layer instances. **IMPORTANT**: if the project option "*Save
 * levels separately*" is enabled, this field will be `null`.<br/>  This array is **sorted
 * in display order**: the 1st layer is the top-most and the last is behind.
 * @property {number} pxHei 
 * Height of the level in pixels
 * @property {number} pxWid 
 * Width of the level in pixels
 * @property {number} uid 
 * Unique Int identifier
 * @property {boolean} useAutoIdentifier 
 * If TRUE, the level identifier will always automatically use the naming pattern as defined
 * in `Project.levelNamePattern`. Becomes FALSE if the identifier is manually modified by
 * user.
 * @property {number} worldDepth 
 * Index that represents the "depth" of the level in the world. Default is 0, greater means
 * "above", lower means "below".<br/>  This value is mostly used for display only and is
 * intended to make stacking of levels easier to manage.
 * @property {number} worldX 
 * World X coordinate in pixels.<br/>  Only relevant for world layouts where level spatial
 * positioning is manual (ie. GridVania, Free). For Horizontal and Vertical layouts, the
 * value is always -1 here.
 * @property {number} worldY 
 * World Y coordinate in pixels.<br/>  Only relevant for world layouts where level spatial
 * positioning is manual (ie. GridVania, Free). For Horizontal and Vertical layouts, the
 * value is always -1 here.
 */
/**
 * Level background image position info
 * @typedef {Object} LevelBackgroundPosition
 * @property {number[]} cropRect 
 * An array of 4 float values describing the cropped sub-rectangle of the displayed
 * background image. This cropping happens when original is larger than the level bounds.
 * Array format: `[ cropX, cropY, cropWidth, cropHeight ]`
 * @property {number[]} scale 
 * An array containing the `[scaleX,scaleY]` values of the **cropped** background image,
 * depending on `bgPos` option.
 * @property {number[]} topLeftPx 
 * An array containing the `[x,y]` pixel coordinates of the top-left corner of the
 * **cropped** background image, depending on `bgPos` option.
 */
/**
 * Nearby level info
 * @typedef {Object} NeighbourLevel
 * @property {string} dir 
 * A single lowercase character tipping on the level location (`n`orth, `s`outh, `w`est,
 * `e`ast).
 * @property {string} levelIid 
 * Neighbour Instance Identifier
 * @property {number|null} [levelUid] 
 * **WARNING**: this deprecated value is no longer exported since version 1.2.0  Replaced
 * by: `levelIid`
 */
/**
 * @typedef {Object} LdtkTableOfContentEntry
 * @property {string} identifier
 * @property {ReferenceToAnEntityInstance[]} instances 
 */
/**
 * **IMPORTANT**: this type is available as a preview. You can rely on it to update your
 * importers, for when it will be officially available.  A World contains multiple levels,
 * and it has its own layout settings.
 * @typedef {Object} World
 * @property {number} defaultLevelHeight 
 * Default new level height
 * @property {number} defaultLevelWidth 
 * Default new level width
 * @property {string} identifier 
 * User defined unique identifier
 * @property {string} iid 
 * Unique instance identifer
 * @property {Level[]} levels 
 * All levels from this world. The order of this array is only relevant in
 * `LinearHorizontal` and `linearVertical` world layouts (see `worldLayout` value).
 * Otherwise, you should refer to the `worldX`,`worldY` coordinates of each Level.
 * @property {number} worldGridHeight 
 * Height of the world grid in pixels.
 * @property {number} worldGridWidth 
 * Width of the world grid in pixels.
 * @property {WorldLayout|null} worldLayout 
 * An enum that describes how levels are organized in this project (ie. linearly or in a 2D
 * space). Possible values: `Free`, `GridVania`, `LinearHorizontal`, `LinearVertical`, `null`
 */
