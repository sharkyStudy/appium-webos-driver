let constants = (module.exports = {});

constants.COMMAND_TYPES = {
  ACTION: "action",
  SHUTDOWN: "shutdown",
};

constants.MODES = {
  PUPPETEER: "puppeteer",
  CDP: "cdp",
};

constants.STRATEGIES = {
  XPATH: "xpath",
  CSS_SELECTOR: "css selector",
  CLASS_NAME: "class name",
};

constants.MODES = {
  PUPPETEER: "puppeteer",
  CDP: "cdp",
};

constants.OPERATIONS = {
  FIND: "FIND",
  CLICK: "CLICK",
};

constants.CONNECTION_STATUS = {
  RESPONSE: "response",
  REGISTERED: "registered",
};

constants.KEYS_PATH = "./client-keys.json";

constants.HANDSHAKE_DATA = {
  id: "register_0",
  payload: {
    forcePairing: false,
    manifest: {
      appVersion: "1.1",
      manifestVersion: 1,
      permissions: [
        "LAUNCH",
        "LAUNCH_WEBAPP",
        "APP_TO_APP",
        "CLOSE",
        "TEST_OPEN",
        "TEST_PROTECTED",
        "CONTROL_AUDIO",
        "CONTROL_DISPLAY",
        "CONTROL_INPUT_JOYSTICK",
        "CONTROL_INPUT_MEDIA_RECORDING",
        "CONTROL_INPUT_MEDIA_PLAYBACK",
        "CONTROL_INPUT_TV",
        "CONTROL_POWER",
        "READ_APP_STATUS",
        "READ_CURRENT_CHANNEL",
        "READ_INPUT_DEVICE_LIST",
        "READ_NETWORK_STATE",
        "READ_RUNNING_APPS",
        "READ_TV_CHANNEL_LIST",
        "WRITE_NOTIFICATION_TOAST",
        "READ_POWER_STATE",
        "READ_COUNTRY_INFO",
        "READ_SETTINGS",
        "CONTROL_TV_SCREEN",
        "CONTROL_TV_STANBY",
        "CONTROL_FAVORITE_GROUP",
        "CONTROL_USER_INFO",
        "CHECK_BLUETOOTH_DEVICE",
        "CONTROL_BLUETOOTH",
        "CONTROL_TIMER_INFO",
        "STB_INTERNAL_CONNECTION",
        "CONTROL_RECORDING",
        "READ_RECORDING_STATE",
        "WRITE_RECORDING_LIST",
        "READ_RECORDING_LIST",
        "READ_RECORDING_SCHEDULE",
        "WRITE_RECORDING_SCHEDULE",
        "READ_STORAGE_DEVICE_LIST",
        "READ_TV_PROGRAM_INFO",
        "CONTROL_BOX_CHANNEL",
        "READ_TV_ACR_AUTH_TOKEN",
        "READ_TV_CONTENT_STATE",
        "READ_TV_CURRENT_TIME",
        "ADD_LAUNCHER_CHANNEL",
        "SET_CHANNEL_SKIP",
        "RELEASE_CHANNEL_SKIP",
        "CONTROL_CHANNEL_BLOCK",
        "DELETE_SELECT_CHANNEL",
        "CONTROL_CHANNEL_GROUP",
        "SCAN_TV_CHANNELS",
        "CONTROL_TV_POWER",
        "CONTROL_WOL",
      ],
      signatures: [
        {
          signature:
            "eyJhbGdvcml0aG0iOiJSU0EtU0hBMjU2Iiwia2V5SWQiOiJ0ZXN0LXNpZ25pbmctY2VydCIsInNpZ25hdHVyZVZlcnNpb24iOjF9.hrVRgjCwXVvE2OOSpDZ58hR+59aFNwYDyjQgKk3auukd7pcegmE2CzPCa0bJ0ZsRAcKkCTJrWo5iDzNhMBWRyaMOv5zWSrthlf7G128qvIlpMT0YNY+n/FaOHE73uLrS/g7swl3/qH/BGFG2Hu4RlL48eb3lLKqTt2xKHdCs6Cd4RMfJPYnzgvI4BNrFUKsjkcu+WD4OO2A27Pq1n50cMchmcaXadJhGrOqH5YmHdOCj5NSHzJYrsW0HPlpuAx/ECMeIZYDh6RMqaFM2DXzdKX9NmmyqzJ3o/0lkk/N97gfVRLW5hA29yeAwaCViZNCP8iC9aO0q9fQojoa7NQnAtw==",
          signatureVersion: 1,
        },
      ],
      signed: {
        appId: "com.lge.test",
        created: "20140509",
        localizedAppNames: {
          "": "LG Remote App",
          "ko-KR": "리모컨 앱",
          "zxx-XX": "ЛГ Rэмotэ AПП",
        },
        localizedVendorNames: {
          "": "LG Electronics",
        },
        permissions: [
          "TEST_SECURE",
          "CONTROL_INPUT_TEXT",
          "CONTROL_MOUSE_AND_KEYBOARD",
          "READ_INSTALLED_APPS",
          "READ_LGE_SDX",
          "READ_NOTIFICATIONS",
          "SEARCH",
          "WRITE_SETTINGS",
          "WRITE_NOTIFICATION_ALERT",
          "CONTROL_POWER",
          "READ_CURRENT_CHANNEL",
          "READ_RUNNING_APPS",
          "READ_UPDATE_INFO",
          "UPDATE_FROM_REMOTE_APP",
          "READ_LGE_TV_INPUT_EVENTS",
          "READ_TV_CURRENT_TIME",
        ],
        serial: "2f930e2d2cfe083771f68e4fe7bb07",
        vendorId: "com.lge",
      },
    },
    pairingType: "PROMPT",
  },
  type: "register",
};

constants.DISCOVERY_REQUEST = Buffer.from(
  "M-SEARCH * HTTP/1.1\r\n" +
    "HOST: 239.255.255.250:1900\r\n" +
    'MAN: "ssdp:discover"\r\n' +
    "MX: 2\r\n" +
    "ST: urn:schemas-upnp-org:device:MediaRenderer:1\r\n\r\n"
);

constants.MESSAGE_PAIRING_KEY =
  '<?xml version="1.0" encoding="utf-8"?>' +
  "<auth><type>AuthKeyReq</type></auth>";

constants.REMOTE_COMMANDS = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  ZERO: "0",
  LIST: "LIST",
  AD: "AD",
  DASH: "DASH",
  MUTE: "MUTE",
  VOLUMEUP: "VOLUMEUP",
  VOLUMEDOWN: "VOLUMEDOWN",
  CHANNELUP: "CHANNELUP",
  CHANNELDOWN: "CHANNELDOWN",
  HOME: "HOME",
  MENU: "MENU",
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  CLICK: "CLICK",
  BACK: "BACK",
  EXIT: "EXIT",
  PROGRAM: "PROGRAM",
  ENTER: "ENTER",
  INFO: "INFO",
  RED: "RED",
  GREEN: "GREEN",
  YELLOW: "YELLOW",
  BLUE: "BLUE",
  LIVE_ZOOM: "LIVE_ZOOM",
  CC: "CC",
  PLAY: "PLAY",
  PAUSE: "PAUSE",
  REWIND: "REWIND",
  FASTFORWARD: "FASTFORWARD",
  POWER: "POWER",
  FAVORITES: "FAVORITES",
  RECORD: "RECORD",
  FLASHBACK: "FLASHBACK",
  QMENU: "QMENU",
  GOTOPREV: "GOTOPREV",
  GOTONEXT: "GOTONEXT",
  THREE_D_MODE: "3D_MODE",
  SAP: "SAP",
  ASPECT_RATIO: "ASPECT_RATIO",
  EJECT: "EJECT",
  MYAPPS: "MYAPPS",
  RECENT: "RECENT",
  BS: "BS",
  BS_NUM_1: "BS_NUM_1",
  BS_NUM_2: "BS_NUM_2",
  BS_NUM_3: "BS_NUM_3",
  BS_NUM_4: "BS_NUM_4",
  BS_NUM_5: "BS_NUM_5",
  BS_NUM_6: "BS_NUM_6",
  BS_NUM_7: "BS_NUM_7",
  BS_NUM_8: "BS_NUM_8",
  BS_NUM_9: "BS_NUM_9",
  BS_NUM_10: "BS_NUM_10",
  BS_NUM_11: "BS_NUM_11",
  BS_NUM_12: "BS_NUM_12",
  CS1: "CS1",
  CS1_NUM_1: "CS1_NUM_1",
  CS1_NUM_2: "CS1_NUM_2",
  CS1_NUM_3: "CS1_NUM_3",
  CS1_NUM_4: "CS1_NUM_4",
  CS1_NUM_5: "CS1_NUM_5",
  CS1_NUM_6: "CS1_NUM_6",
  CS1_NUM_7: "CS1_NUM_7",
  CS1_NUM_8: "CS1_NUM_8",
  CS1_NUM_9: "CS1_NUM_9",
  CS1_NUM_10: "CS1_NUM_10",
  CS1_NUM_11: "CS1_NUM_11",
  CS1_NUM_12: "CS1_NUM_12",
  CS2: "CS2",
  CS2_NUM_1: "CS2_NUM_1",
  CS2_NUM_2: "CS2_NUM_2",
  CS2_NUM_3: "CS2_NUM_3",
  CS2_NUM_4: "CS2_NUM_4",
  CS2_NUM_5: "CS2_NUM_5",
  CS2_NUM_6: "CS2_NUM_6",
  CS2_NUM_7: "CS2_NUM_7",
  CS2_NUM_8: "CS2_NUM_8",
  CS2_NUM_9: "CS2_NUM_9",
  CS2_NUM_10: "CS2_NUM_10",
  CS2_NUM_11: "CS2_NUM_11",
  CS2_NUM_12: "CS2_NUM_12",
  TER: "TER",
  TER_NUM_1: "TER_NUM_1",
  TER_NUM_2: "TER_NUM_2",
  TER_NUM_3: "TER_NUM_3",
  TER_NUM_4: "TER_NUM_4",
  TER_NUM_5: "TER_NUM_5",
  TER_NUM_6: "TER_NUM_6",
  TER_NUM_7: "TER_NUM_7",
  TER_NUM_8: "TER_NUM_8",
  TER_NUM_9: "TER_NUM_9",
  TER_NUM_10: "TER_NUM_10",
  TER_NUM_11: "TER_NUM_11",
  TER_NUM_12: "TER_NUM_12",
  THREE_DIGIT_INPUT: "3DIGIT_INPUT",
  BML_DATA: "BML_DATA",
  JAPAN_DISPLAY: "JAPAN_DISPLAY",
  TELETEXT: "TELETEXT",
  TEXTOPTION: "TEXTOPTION",
  MAGNIFIER_ZOOM: "MAGNIFIER_ZOOM",
  SCREEN_REMOTE: "SCREEN_REMOT",
};

constants.EP = {
  GET_SERVICES: {
    type: "GET_SERVICES",
    uri: "api/getServiceList",
  },
  SET_MUTE: {
    type: "SET_MUTE",
    uri: "audio/setMute",
  },
  GET_AUDIO_STATUS: {
    type: "GET_AUDIO_STATUS",
    uri: "audio/getStatus",
  },
  GET_VOLUME: {
    type: "GET_VOLUME",
    uri: "audio/getVolume",
  },
  SET_VOLUME: {
    type: "SET_VOLUME",
    uri: "audio/setVolume",
  },
  VOLUME_UP: {
    type: "VOLUME_UP",
    uri: "audio/volumeUp",
  },
  VOLUME_DOWN: {
    type: "VOLUME_DOWN",
    uri: "audio/volumeDown",
  },
  GET_CURRENT_APP_INFO: {
    type: "GET_CURRENT_APP_INFO",
    uri: "com.webos.applicationManager/getForegroundAppInfo",
  },
  LAUNCH_APP: {
    type: "LAUNCH_APP",
    uri: "com.webos.applicationManager/launch",
  },
  GET_APPS: {
    type: "GET_APPS",
    uri: "com.webos.applicationManager/listLaunchPoints",
  },
  GET_APP_STATUS: {
    type: "GET_APP_STATUS",
    uri: "com.webos.service.appstatus/getAppStatus",
  },
  SEND_ENTER: {
    type: "SEND_ENTER",
    uri: "com.webos.service.ime/sendEnterKey",
  },
  SEND_DELETE: {
    type: "SEND_DELETE",
    uri: "com.webos.service.ime/deleteCharacters",
  },
  THREE_D_ON: {
    type: "THREE_D_ON",
    uri: "com.webos.service.tv.display/set3DOn",
  },
  THREE_D_OFF: {
    type: "THREE_D_OFF",
    uri: "com.webos.service.tv.display/set3DOff",
  },
  GET_SOFTWARE_INFO: {
    type: "GET_SOFTWARE_INFO",
    uri: "com.webos.service.update/getCurrentSWInformation",
  },
  MEDIA_PLAY: {
    type: "MEDIA_PLAY",
    uri: "media.controls/play",
  },
  MEDIA_STOP: {
    type: "MEDIA_STOP",
    uri: "media.controls/stop",
  },
  MEDIA_PAUSE: {
    type: "MEDIA_PAUSE",
    uri: "media.controls/pause",
  },
  MEDIA_REWIND: {
    type: "MEDIA_REWIND",
    uri: "media.controls/rewind",
  },
  MEDIA_FAST_FORWARD: {
    type: "MEDIA_FAST_FORWARD",
    uri: "media.controls/fastForward",
  },
  MEDIA_CLOSE: {
    type: "MEDIA_CLOSE",
    uri: "media.viewer/close",
  },
  POWER_OFF: {
    type: "POWER_OFF",
    uri: "system/turnOff",
  },
  POWER_ON: {
    type: "POWER_ON",
    uri: "system/turnOn",
  },
  SHOW_MESSAGE: {
    type: "SHOW_MESSAGE",
    uri: "system.notifications/createToast",
  },
  LAUNCHER_CLOSE: {
    type: "LAUNCHER_CLOSE",
    uri: "system.launcher/close",
  },
  GET_APP_STATE: {
    type: "GET_APP_STATE",
    uri: "system.launcher/getAppState",
  },
  LAUNCH: {
    type: "LAUNCH",
    uri: "system.launcher/launch",
  },
  OPEN: {
    type: "OPEN",
    uri: "system.launcher/open",
  },
  TV_CHANNEL_DOWN: {
    type: "TV_CHANNEL_DOWN",
    uri: "tv/channelDown",
  },
  TV_CHANNEL_UP: {
    type: "TV_CHANNEL_UP",
    uri: "tv/channelUp",
  },
  GET_TV_CHANNELS: {
    type: "GET_TV_CHANNELS",
    uri: "tv/getChannelList",
  },
  GET_CHANNEL_INFO: {
    type: "GET_CHANNEL_INFO",
    uri: "tv/getChannelProgramInfo",
  },
  GET_CURRENT_CHANNEL: {
    type: "GET_CURRENT_CHANNEL",
    uri: "tv/getCurrentChannel",
  },
  GET_INPUTS: {
    type: "GET_INPUTS",
    uri: "tv/getExternalInputList",
  },
  SET_CHANNEL: {
    type: "SET_CHANNEL",
    uri: "tv/openChannel",
  },
  SET_INPUT: {
    type: "SET_INPUT",
    uri: "tv/switchInput",
  },
  CLOSE_WEB_APP: {
    type: "CLOSE_WEB_APP",
    uri: "webapp/closeWebApp",
  },
  REMOTE_POINTER_INPUT: {
    type: "REMOTE_POINTER_INPUT",
    uri: "com.webos.service.networkinput/getPointerInputSocket",
    requestType: "click",
  },
  POWER_STATE: {
    type: "POWER_STATE",
    uri: "com.webos.service.tvpower/power/getPowerState",
  },
  SYSTEM_INFO: {
    type: "SYSTEM_INFO",
    uri: "system/getSystemInfo",
  },
  LAUNCH_POINTS: {
    type: "LAUNCH_POINTS",
    uri: "com.webos.applicationManager/listLaunchPoints",
  },
  LIST_APPS: {
    type: "LIST_APPS",
    uri: "com.webos.applicationManager/listApps",
  },
  EXTERNAL_INPUT_LIST: {
    type: "EXTERNAL_INPUT_LIST",
    uri: "tv/getExternalInputList",
  },
  SOUND_OUTPUT: {
    type: "SOUND_OUTPUT",
    uri: "com.webos.service.apiadapter/audio/getSoundOutput",
  },
  SYSTEM_SETTINGS: {
    type: "SYSTEM_SETTINGS",
    uri: "settings/getSystemSettings",
  },
  CONFIG: {
    type: "CONFIG",
    uri: "config/getConfigs",
  },
};

constants.PROTOCOL_DESCRIPTOR = {
  version: { major: "1", minor: "1" },
  domains: [
    {
      domain: "Inspector",
      hidden: true,
      types: [],
      commands: [
        {
          name: "enable",
          description: "Enables inspector domain notifications.",
        },
        {
          name: "disable",
          description: "Disables inspector domain notifications.",
        },
        {
          name: "reset",
          description: "Resets all domains.",
        },
      ],
      events: [
        {
          name: "evaluateForTestInFrontend",
          parameters: [
            { name: "testCallId", type: "integer" },
            { name: "script", type: "string" },
          ],
        },
        {
          name: "inspect",
          parameters: [
            { name: "object", $ref: "Runtime.RemoteObject" },
            { name: "hints", type: "object" },
          ],
        },
        {
          name: "detached",
          description:
            "Fired when remote debugging connection is about to be terminated. Contains detach reason.",
          parameters: [
            {
              name: "reason",
              type: "string",
              description: "The reason why connection has been terminated.",
            },
          ],
        },
        {
          name: "targetCrashed",
          description: "Fired when debugging target has crashed",
        },
      ],
    },
    {
      domain: "Memory",
      hidden: true,
      types: [
        {
          id: "MemoryBlock",
          type: "object",
          properties: [
            {
              name: "size",
              type: "number",
              optional: true,
              description: "Size of the block in bytes if available",
            },
            {
              name: "name",
              type: "string",
              description:
                "Unique name used to identify the component that allocated this block",
            },
            {
              name: "children",
              type: "array",
              optional: true,
              items: { $ref: "MemoryBlock" },
            },
          ],
        },
        {
          id: "HeapSnapshotChunk",
          type: "object",
          properties: [
            {
              name: "strings",
              type: "array",
              items: { type: "string" },
              description:
                "An array of strings that were found since last update.",
            },
            {
              name: "nodes",
              type: "array",
              items: { type: "integer" },
              description:
                "An array of nodes that were found since last update.",
            },
            {
              name: "edges",
              type: "array",
              items: { type: "integer" },
              description:
                "An array of edges that were found since last update.",
            },
            {
              name: "baseToRealNodeId",
              type: "array",
              items: { type: "integer" },
              description:
                "An array of integers for nodeId remapping. Even nodeId has to be mapped to the following odd nodeId.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "getDOMCounters",
          returns: [
            { name: "documents", type: "integer" },
            { name: "nodes", type: "integer" },
            { name: "jsEventListeners", type: "integer" },
          ],
        },
      ],
      events: [
        {
          name: "addNativeSnapshotChunk",
          parameters: [
            {
              name: "chunk",
              $ref: "HeapSnapshotChunk",
              description: "A chunk of the serialized the snapshot.",
            },
          ],
        },
      ],
    },
    {
      domain: "Page",
      description:
        "Actions and events related to the inspected page belong to the page domain.",
      types: [
        {
          id: "ResourceType",
          type: "string",
          enum: [
            "Document",
            "Stylesheet",
            "Image",
            "Font",
            "Script",
            "XHR",
            "WebSocket",
            "Other",
          ],
          description:
            "Resource type as it was perceived by the rendering engine.",
        },
        {
          id: "FrameId",
          type: "string",
          description: "Unique frame identifier.",
        },
        {
          id: "Frame",
          type: "object",
          description: "Information about the Frame on the page.",
          properties: [
            {
              name: "id",
              type: "string",
              description: "Frame unique identifier.",
            },
            {
              name: "parentId",
              type: "string",
              optional: true,
              description: "Parent frame identifier.",
            },
            {
              name: "loaderId",
              $ref: "Network.LoaderId",
              description:
                "Identifier of the loader associated with this frame.",
            },
            {
              name: "name",
              type: "string",
              optional: true,
              description: "Frame's name as specified in the tag.",
            },
            {
              name: "url",
              type: "string",
              description: "Frame document's URL.",
            },
            {
              name: "securityOrigin",
              type: "string",
              description: "Frame document's security origin.",
            },
            {
              name: "mimeType",
              type: "string",
              description:
                "Frame document's mimeType as determined by the browser.",
            },
          ],
        },
        {
          id: "FrameResourceTree",
          type: "object",
          description:
            "Information about the Frame hierarchy along with their cached resources.",
          properties: [
            {
              name: "frame",
              $ref: "Frame",
              description: "Frame information for this tree item.",
            },
            {
              name: "childFrames",
              type: "array",
              optional: true,
              items: { $ref: "FrameResourceTree" },
              description: "Child frames.",
            },
            {
              name: "resources",
              type: "array",
              items: {
                type: "object",
                properties: [
                  { name: "url", type: "string", description: "Resource URL." },
                  {
                    name: "type",
                    $ref: "ResourceType",
                    description: "Type of this resource.",
                  },
                  {
                    name: "mimeType",
                    type: "string",
                    description:
                      "Resource mimeType as determined by the browser.",
                  },
                  {
                    name: "failed",
                    type: "boolean",
                    optional: true,
                    description: "True if the resource failed to load.",
                  },
                  {
                    name: "canceled",
                    type: "boolean",
                    optional: true,
                    description:
                      "True if the resource was canceled during loading.",
                  },
                ],
              },
              description: "Information about frame resources.",
            },
          ],
          hidden: true,
        },
        {
          id: "SearchMatch",
          type: "object",
          description: "Search match for resource.",
          properties: [
            {
              name: "lineNumber",
              type: "number",
              description: "Line number in resource content.",
            },
            {
              name: "lineContent",
              type: "string",
              description: "Line with match content.",
            },
          ],
          hidden: true,
        },
        {
          id: "SearchResult",
          type: "object",
          description: "Search result for resource.",
          properties: [
            { name: "url", type: "string", description: "Resource URL." },
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Resource frame id.",
            },
            {
              name: "matchesCount",
              type: "number",
              description: "Number of matches in the resource content.",
            },
          ],
          hidden: true,
        },
        {
          id: "Cookie",
          type: "object",
          description: "Cookie object",
          properties: [
            { name: "name", type: "string", description: "Cookie name." },
            { name: "value", type: "string", description: "Cookie value." },
            { name: "domain", type: "string", description: "Cookie domain." },
            { name: "path", type: "string", description: "Cookie path." },
            { name: "expires", type: "number", description: "Cookie expires." },
            { name: "size", type: "integer", description: "Cookie size." },
            {
              name: "httpOnly",
              type: "boolean",
              description: "True if cookie is http-only.",
            },
            {
              name: "secure",
              type: "boolean",
              description: "True if cookie is secure.",
            },
            {
              name: "session",
              type: "boolean",
              description: "True in case of session cookie.",
            },
          ],
          hidden: true,
        },
        {
          id: "ScriptIdentifier",
          type: "string",
          description: "Unique script identifier.",
          hidden: true,
        },
        {
          id: "NavigationEntry",
          type: "object",
          description: "Navigation history entry.",
          properties: [
            {
              name: "id",
              type: "integer",
              description: "Unique id of the navigation history entry.",
            },
            {
              name: "url",
              type: "string",
              description: "URL of the navigation history entry.",
            },
            {
              name: "title",
              type: "string",
              description: "Title of the navigation history entry.",
            },
          ],
          hidden: true,
        },
      ],
      commands: [
        {
          name: "enable",
          description: "Enables page domain notifications.",
        },
        {
          name: "disable",
          description: "Disables page domain notifications.",
        },
        {
          name: "addScriptToEvaluateOnLoad",
          parameters: [{ name: "scriptSource", type: "string" }],
          returns: [
            {
              name: "identifier",
              $ref: "ScriptIdentifier",
              description: "Identifier of the added script.",
            },
          ],
          hidden: true,
        },
        {
          name: "removeScriptToEvaluateOnLoad",
          parameters: [{ name: "identifier", $ref: "ScriptIdentifier" }],
          hidden: true,
        },
        {
          name: "reload",
          parameters: [
            {
              name: "ignoreCache",
              type: "boolean",
              optional: true,
              description:
                "If true, browser cache is ignored (as if the user pressed Shift+refresh).",
            },
            {
              name: "scriptToEvaluateOnLoad",
              type: "string",
              optional: true,
              description:
                "If set, the script will be injected into all frames of the inspected page after reload.",
            },
            {
              name: "scriptPreprocessor",
              type: "string",
              optional: true,
              description:
                "Script body that should evaluate to function that will preprocess all the scripts before their compilation.",
              hidden: true,
            },
          ],
          description: "Reloads given page optionally ignoring the cache.",
        },
        {
          name: "navigate",
          parameters: [
            {
              name: "url",
              type: "string",
              description: "URL to navigate the page to.",
            },
          ],
          description: "Navigates current page to the given URL.",
        },
        {
          name: "getNavigationHistory",
          parameters: [],
          returns: [
            {
              name: "currentIndex",
              type: "integer",
              description: "Index of the current navigation history entry.",
            },
            {
              name: "entries",
              type: "array",
              items: { $ref: "NavigationEntry" },
              description: "Array of navigation history entries.",
            },
          ],
          description: "Returns navigation history for the current page.",
          hidden: true,
        },
        {
          name: "navigateToHistoryEntry",
          parameters: [
            {
              name: "entryId",
              type: "integer",
              description: "Unique id of the entry to navigate to.",
            },
          ],
          description: "Navigates current page to the given history entry.",
          hidden: true,
        },
        {
          name: "getCookies",
          returns: [
            {
              name: "cookies",
              type: "array",
              items: { $ref: "Cookie" },
              description: "Array of cookie objects.",
            },
            {
              name: "cookiesString",
              type: "string",
              description:
                "document.cookie string representation of the cookies.",
            },
          ],
          description:
            "Returns all browser cookies. Depending on the backend support, will either return detailed cookie information in the <code>cookie</code> field or string cookie representation using <code>cookieString</code>.",
          hidden: true,
        },
        {
          name: "deleteCookie",
          parameters: [
            {
              name: "cookieName",
              type: "string",
              description: "Name of the cookie to remove.",
            },
            {
              name: "url",
              type: "string",
              description: "URL to match cooke domain and path.",
            },
          ],
          description:
            "Deletes browser cookie with given name, domain and path.",
          hidden: true,
        },
        {
          name: "getResourceTree",
          description: "Returns present frame / resource tree structure.",
          returns: [
            {
              name: "frameTree",
              $ref: "FrameResourceTree",
              description: "Present frame / resource tree structure.",
            },
          ],
          hidden: true,
        },
        {
          name: "getResourceContent",
          description: "Returns content of the given resource.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Frame id to get resource for.",
            },
            {
              name: "url",
              type: "string",
              description: "URL of the resource to get content for.",
            },
          ],
          returns: [
            {
              name: "content",
              type: "string",
              description: "Resource content.",
            },
            {
              name: "base64Encoded",
              type: "boolean",
              description: "True, if content was served as base64.",
            },
          ],
          hidden: true,
        },
        {
          name: "searchInResource",
          description: "Searches for given string in resource content.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Frame id for resource to search in.",
            },
            {
              name: "url",
              type: "string",
              description: "URL of the resource to search in.",
            },
            {
              name: "query",
              type: "string",
              description: "String to search for.",
            },
            {
              name: "caseSensitive",
              type: "boolean",
              optional: true,
              description: "If true, search is case sensitive.",
            },
            {
              name: "isRegex",
              type: "boolean",
              optional: true,
              description: "If true, treats string parameter as regex.",
            },
          ],
          returns: [
            {
              name: "result",
              type: "array",
              items: { $ref: "SearchMatch" },
              description: "List of search matches.",
            },
          ],
          hidden: true,
        },
        {
          name: "searchInResources",
          description:
            "Searches for given string in frame / resource tree structure.",
          parameters: [
            {
              name: "text",
              type: "string",
              description: "String to search for.",
            },
            {
              name: "caseSensitive",
              type: "boolean",
              optional: true,
              description: "If true, search is case sensitive.",
            },
            {
              name: "isRegex",
              type: "boolean",
              optional: true,
              description: "If true, treats string parameter as regex.",
            },
          ],
          returns: [
            {
              name: "result",
              type: "array",
              items: { $ref: "SearchResult" },
              description: "List of search results.",
            },
          ],
          hidden: true,
        },
        {
          name: "setDocumentContent",
          description: "Sets given markup as the document's HTML.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Frame id to set HTML for.",
            },
            {
              name: "html",
              type: "string",
              description: "HTML content to set.",
            },
          ],
          hidden: true,
        },
        {
          name: "setDeviceMetricsOverride",
          description:
            'Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results) and the font scale factor.',
          parameters: [
            {
              name: "width",
              type: "integer",
              description:
                "Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.",
            },
            {
              name: "height",
              type: "integer",
              description:
                "Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.",
            },
            {
              name: "fontScaleFactor",
              type: "number",
              description:
                "Overriding font scale factor value (must be positive). 1 disables the override.",
            },
            {
              name: "fitWindow",
              type: "boolean",
              description:
                "Whether a view that exceeds the available browser window area should be scaled down to fit.",
            },
          ],
          hidden: true,
        },
        {
          name: "setShowPaintRects",
          description: "Requests that backend shows paint rectangles",
          parameters: [
            {
              name: "result",
              type: "boolean",
              description: "True for showing paint rectangles",
            },
          ],
          hidden: true,
        },
        {
          name: "setShowDebugBorders",
          description: "Requests that backend shows debug borders on layers",
          parameters: [
            {
              name: "show",
              type: "boolean",
              description: "True for showing debug borders",
            },
          ],
          hidden: true,
        },
        {
          name: "setShowFPSCounter",
          description: "Requests that backend shows the FPS counter",
          parameters: [
            {
              name: "show",
              type: "boolean",
              description: "True for showing the FPS counter",
            },
          ],
          hidden: true,
        },
        {
          name: "setContinuousPaintingEnabled",
          description: "Requests that backend enables continuous painting",
          parameters: [
            {
              name: "enabled",
              type: "boolean",
              description: "True for enabling cointinuous painting",
            },
          ],
          hidden: true,
        },
        {
          name: "setShowScrollBottleneckRects",
          description: "Requests that backend shows scroll bottleneck rects",
          parameters: [
            {
              name: "show",
              type: "boolean",
              description: "True for showing scroll bottleneck rects",
            },
          ],
          hidden: true,
        },
        {
          name: "getScriptExecutionStatus",
          description: "Determines if scripts can be executed in the page.",
          returns: [
            {
              name: "result",
              type: "string",
              enum: ["allowed", "disabled", "forbidden"],
              description:
                'Script execution status: "allowed" if scripts can be executed, "disabled" if script execution has been disabled through page settings, "forbidden" if script execution for the given page is not possible for other reasons.',
            },
          ],
          hidden: true,
        },
        {
          name: "setScriptExecutionDisabled",
          description: "Switches script execution in the page.",
          parameters: [
            {
              name: "value",
              type: "boolean",
              description:
                "Whether script execution should be disabled in the page.",
            },
          ],
          hidden: true,
        },
        {
          name: "setGeolocationOverride",
          description: "Overrides the Geolocation Position or Error.",
          parameters: [
            {
              name: "latitude",
              type: "number",
              optional: true,
              description: "Mock longitude",
            },
            {
              name: "longitude",
              type: "number",
              optional: true,
              description: "Mock latitude",
            },
            {
              name: "accuracy",
              type: "number",
              optional: true,
              description: "Mock accuracy",
            },
          ],
        },
        {
          name: "clearGeolocationOverride",
          description: "Clears the overriden Geolocation Position and Error.",
        },
        {
          name: "setDeviceOrientationOverride",
          description: "Overrides the Device Orientation.",
          parameters: [
            { name: "alpha", type: "number", description: "Mock alpha" },
            { name: "beta", type: "number", description: "Mock beta" },
            { name: "gamma", type: "number", description: "Mock gamma" },
          ],
          hidden: true,
        },
        {
          name: "clearDeviceOrientationOverride",
          description: "Clears the overridden Device Orientation.",
          hidden: true,
        },
        {
          name: "setTouchEmulationEnabled",
          parameters: [
            {
              name: "enabled",
              type: "boolean",
              description:
                "Whether the touch event emulation should be enabled.",
            },
          ],
          description: "Toggles mouse event-based touch event emulation.",
          hidden: true,
        },
        {
          name: "setEmulatedMedia",
          parameters: [
            {
              name: "media",
              type: "string",
              description:
                "Media type to emulate. Empty string disables the override.",
            },
          ],
          description: "Emulates the given media for CSS media queries.",
          hidden: true,
        },
        {
          name: "captureScreenshot",
          description: "Capture page screenshot.",
          parameters: [
            {
              name: "format",
              type: "string",
              optional: true,
              enum: ["jpeg", "png"],
              description: "Image compression format.",
            },
            {
              name: "quality",
              type: "integer",
              hidden: true,
              optional: true,
              description: "Compression quality from range [0..100].",
            },
            {
              name: "maxWidth",
              type: "integer",
              hidden: true,
              optional: true,
              description: "Maximum screenshot width.",
            },
            {
              name: "maxHeight",
              type: "integer",
              hidden: true,
              optional: true,
              description: "Maximum screenshot height.",
            },
          ],
          returns: [
            {
              name: "data",
              type: "string",
              description: "Base64-encoded image data (PNG).",
            },
            {
              name: "deviceScaleFactor",
              type: "number",
              hidden: true,
              description: "Device scale factor.",
            },
            {
              name: "pageScaleFactor",
              type: "number",
              hidden: true,
              description: "Page scale factor.",
            },
            {
              name: "viewport",
              $ref: "DOM.Rect",
              hidden: true,
              description: "Viewport in CSS pixels.",
            },
          ],
          hidden: true,
        },
        {
          name: "startScreencast",
          description:
            "Starts sending each frame using the <code>screencastFrame</code> event.",
          parameters: [
            {
              name: "format",
              type: "string",
              optional: true,
              enum: ["jpeg", "png"],
              description: "Image compression format.",
            },
            {
              name: "quality",
              type: "integer",
              optional: true,
              description: "Compression quality from range [0..100].",
            },
            {
              name: "maxWidth",
              type: "integer",
              optional: true,
              description: "Maximum screenshot width.",
            },
            {
              name: "maxHeight",
              type: "integer",
              optional: true,
              description: "Maximum screenshot height.",
            },
          ],
          hidden: true,
        },
        {
          name: "stopScreencast",
          description:
            "Stops sending each frame in the <code>screencastFrame</code>.",
          hidden: true,
        },
        {
          name: "handleJavaScriptDialog",
          description:
            "Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).",
          parameters: [
            {
              name: "accept",
              type: "boolean",
              description: "Whether to accept or dismiss the dialog.",
            },
            {
              name: "promptText",
              type: "string",
              optional: true,
              description:
                "The text to enter into the dialog prompt before accepting. Used only if this is a prompt dialog.",
            },
          ],
          hidden: true,
        },
        {
          name: "setShowViewportSizeOnResize",
          description: "Paints viewport size upon main frame resize.",
          parameters: [
            {
              name: "show",
              type: "boolean",
              description: "Whether to paint size or not.",
            },
            {
              name: "showGrid",
              type: "boolean",
              optional: true,
              description: "Whether to paint grid as well.",
            },
          ],
          hidden: true,
        },
        {
          name: "setForceCompositingMode",
          description: "Force accelerated compositing mode for inspected page.",
          parameters: [
            {
              name: "force",
              type: "boolean",
              description: "Whether to force accelerated compositing or not.",
            },
          ],
          hidden: true,
        },
      ],
      events: [
        {
          name: "domContentEventFired",
          parameters: [{ name: "timestamp", type: "number" }],
        },
        {
          name: "loadEventFired",
          parameters: [{ name: "timestamp", type: "number" }],
        },
        {
          name: "frameAttached",
          description: "Fired when frame has been attached to its parent.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Id of the frame that has been attached.",
            },
          ],
        },
        {
          name: "frameNavigated",
          description:
            "Fired once navigation of the frame has completed. Frame is now associated with the new loader.",
          parameters: [
            { name: "frame", $ref: "Frame", description: "Frame object." },
          ],
        },
        {
          name: "frameDetached",
          description: "Fired when frame has been detached from its parent.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Id of the frame that has been detached.",
            },
          ],
        },
        {
          name: "frameStartedLoading",
          description: "Fired when frame has started loading.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Id of the frame that has started loading.",
            },
          ],
          hidden: true,
        },
        {
          name: "frameStoppedLoading",
          description: "Fired when frame has stopped loading.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Id of the frame that has stopped loading.",
            },
          ],
          hidden: true,
        },
        {
          name: "frameScheduledNavigation",
          description: "Fired when frame schedules a potential navigation.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description: "Id of the frame that has scheduled a navigation.",
            },
            {
              name: "delay",
              type: "number",
              description:
                "Delay (in seconds) until the navigation is scheduled to begin. The navigation is not guaranteed to start.",
            },
          ],
          hidden: true,
        },
        {
          name: "frameClearedScheduledNavigation",
          description: "Fired when frame no longer has a scheduled navigation.",
          parameters: [
            {
              name: "frameId",
              $ref: "FrameId",
              description:
                "Id of the frame that has cleared its scheduled navigation.",
            },
          ],
          hidden: true,
        },
        {
          name: "javascriptDialogOpening",
          description:
            "Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to open.",
          parameters: [
            {
              name: "message",
              type: "string",
              description: "Message that will be displayed by the dialog.",
            },
          ],
          hidden: true,
        },
        {
          name: "javascriptDialogClosed",
          description:
            "Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been closed.",
          hidden: true,
        },
        {
          name: "scriptsEnabled",
          description:
            "Fired when the JavaScript is enabled/disabled on the page",
          parameters: [
            {
              name: "isEnabled",
              type: "boolean",
              description:
                "Whether script execution is enabled or disabled on the page.",
            },
          ],
          hidden: true,
        },
        {
          name: "screencastFrame",
          description:
            "Compressed image data requested by the <code>startScreencast</code>.",
          parameters: [
            {
              name: "data",
              type: "string",
              description: "Base64-encoded compressed image.",
            },
            {
              name: "deviceScaleFactor",
              type: "number",
              hidden: true,
              optional: true,
              description: "Device scale factor.",
            },
            {
              name: "pageScaleFactor",
              type: "number",
              hidden: true,
              optional: true,
              description: "Page scale factor.",
            },
            {
              name: "viewport",
              $ref: "DOM.Rect",
              hidden: true,
              optional: true,
              description: "Viewport in CSS pixels.",
            },
            {
              name: "offsetTop",
              type: "number",
              hidden: true,
              optional: true,
              description: "Top offset in DIP.",
            },
            {
              name: "offsetBottom",
              type: "number",
              hidden: true,
              optional: true,
              description: "Bottom offset in DIP.",
            },
          ],
          hidden: true,
        },
      ],
    },
    {
      domain: "Runtime",
      description:
        "Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group.",
      types: [
        {
          id: "RemoteObjectId",
          type: "string",
          description: "Unique object identifier.",
        },
        {
          id: "RemoteObject",
          type: "object",
          description: "Mirror object referencing original JavaScript object.",
          properties: [
            {
              name: "type",
              type: "string",
              enum: [
                "object",
                "function",
                "undefined",
                "string",
                "number",
                "boolean",
              ],
              description: "Object type.",
            },
            {
              name: "subtype",
              type: "string",
              optional: true,
              enum: ["array", "null", "node", "regexp", "date"],
              description:
                "Object subtype hint. Specified for <code>object</code> type values only.",
            },
            {
              name: "className",
              type: "string",
              optional: true,
              description:
                "Object class (constructor) name. Specified for <code>object</code> type values only.",
            },
            {
              name: "value",
              type: "any",
              optional: true,
              description:
                "Remote object value (in case of primitive values or JSON values if it was requested).",
            },
            {
              name: "description",
              type: "string",
              optional: true,
              description: "String representation of the object.",
            },
            {
              name: "objectId",
              $ref: "RemoteObjectId",
              optional: true,
              description:
                "Unique object identifier (for non-primitive values).",
            },
            {
              name: "preview",
              $ref: "ObjectPreview",
              optional: true,
              description: "Preview containing abbreviated property values.",
              hidden: true,
            },
          ],
        },
        {
          id: "ObjectPreview",
          type: "object",
          hidden: true,
          description: "Object containing abbreviated remote object value.",
          properties: [
            {
              name: "lossless",
              type: "boolean",
              description:
                "Determines whether preview is lossless (contains all information of the original object).",
            },
            {
              name: "overflow",
              type: "boolean",
              description:
                "True iff some of the properties of the original did not fit.",
            },
            {
              name: "properties",
              type: "array",
              items: { $ref: "PropertyPreview" },
              description: "List of the properties.",
            },
          ],
        },
        {
          id: "PropertyPreview",
          type: "object",
          hidden: true,
          properties: [
            { name: "name", type: "string", description: "Property name." },
            {
              name: "type",
              type: "string",
              enum: [
                "object",
                "function",
                "undefined",
                "string",
                "number",
                "boolean",
              ],
              description: "Object type.",
            },
            {
              name: "value",
              type: "string",
              optional: true,
              description: "User-friendly property value string.",
            },
            {
              name: "valuePreview",
              $ref: "ObjectPreview",
              optional: true,
              description: "Nested value preview.",
            },
            {
              name: "subtype",
              type: "string",
              optional: true,
              enum: ["array", "null", "node", "regexp", "date"],
              description:
                "Object subtype hint. Specified for <code>object</code> type values only.",
            },
          ],
        },
        {
          id: "PropertyDescriptor",
          type: "object",
          description: "Object property descriptor.",
          properties: [
            { name: "name", type: "string", description: "Property name." },
            {
              name: "value",
              $ref: "RemoteObject",
              optional: true,
              description: "The value associated with the property.",
            },
            {
              name: "writable",
              type: "boolean",
              optional: true,
              description:
                "True if the value associated with the property may be changed (data descriptors only).",
            },
            {
              name: "get",
              $ref: "RemoteObject",
              optional: true,
              description:
                "A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only).",
            },
            {
              name: "set",
              $ref: "RemoteObject",
              optional: true,
              description:
                "A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only).",
            },
            {
              name: "configurable",
              type: "boolean",
              description:
                "True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.",
            },
            {
              name: "enumerable",
              type: "boolean",
              description:
                "True if this property shows up during enumeration of the properties on the corresponding object.",
            },
            {
              name: "wasThrown",
              type: "boolean",
              optional: true,
              description:
                "True if the result was thrown during the evaluation.",
            },
            {
              name: "isOwn",
              optional: true,
              type: "boolean",
              description: "True if the property is owned for the object.",
              hidden: true,
            },
          ],
        },
        {
          id: "InternalPropertyDescriptor",
          type: "object",
          description:
            "Object internal property descriptor. This property isn't normally visible in JavaScript code.",
          properties: [
            {
              name: "name",
              type: "string",
              description: "Conventional property name.",
            },
            {
              name: "value",
              $ref: "RemoteObject",
              optional: true,
              description: "The value associated with the property.",
            },
          ],
          hidden: true,
        },
        {
          id: "CallArgument",
          type: "object",
          description:
            "Represents function call argument. Either remote object id <code>objectId</code> or primitive <code>value</code> or neither of (for undefined) them should be specified.",
          properties: [
            {
              name: "value",
              type: "any",
              optional: true,
              description: "Primitive value.",
            },
            {
              name: "objectId",
              $ref: "RemoteObjectId",
              optional: true,
              description: "Remote object handle.",
            },
          ],
        },
        {
          id: "ExecutionContextId",
          type: "integer",
          description: "Id of an execution context.",
        },
        {
          id: "ExecutionContextDescription",
          type: "object",
          description: "Description of an isolated world.",
          properties: [
            {
              name: "id",
              $ref: "ExecutionContextId",
              description:
                "Unique id of the execution context. It can be used to specify in which execution context script evaluation should be performed.",
            },
            {
              name: "isPageContext",
              type: "boolean",
              description:
                "True if this is a context where inpspected web page scripts run. False if it is a content script isolated context.",
              hidden: true,
            },
            {
              name: "name",
              type: "string",
              description: "Human readable name describing given context.",
              hidden: true,
            },
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Id of the owning frame.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "evaluate",
          parameters: [
            {
              name: "expression",
              type: "string",
              description: "Expression to evaluate.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "Symbolic group name that can be used to release multiple objects.",
            },
            {
              name: "includeCommandLineAPI",
              type: "boolean",
              optional: true,
              description:
                "Determines whether Command Line API should be available during the evaluation.",
              hidden: true,
            },
            {
              name: "doNotPauseOnExceptionsAndMuteConsole",
              type: "boolean",
              optional: true,
              description:
                "Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state.",
              hidden: true,
            },
            {
              name: "contextId",
              $ref: "Runtime.ExecutionContextId",
              optional: true,
              description:
                "Specifies in which isolated context to perform evaluation. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page.",
            },
            {
              name: "returnByValue",
              type: "boolean",
              optional: true,
              description:
                "Whether the result is expected to be a JSON object that should be sent by value.",
            },
            {
              name: "generatePreview",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "Whether preview should be generated for the result.",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "RemoteObject",
              description: "Evaluation result.",
            },
            {
              name: "wasThrown",
              type: "boolean",
              optional: true,
              description:
                "True if the result was thrown during the evaluation.",
            },
          ],
          description: "Evaluates expression on global object.",
        },
        {
          name: "callFunctionOn",
          parameters: [
            {
              name: "objectId",
              $ref: "RemoteObjectId",
              description: "Identifier of the object to call function on.",
            },
            {
              name: "functionDeclaration",
              type: "string",
              description: "Declaration of the function to call.",
            },
            {
              name: "arguments",
              type: "array",
              items: { $ref: "CallArgument", description: "Call argument." },
              optional: true,
              description:
                "Call arguments. All call arguments must belong to the same JavaScript world as the target object.",
            },
            {
              name: "doNotPauseOnExceptionsAndMuteConsole",
              type: "boolean",
              optional: true,
              description:
                "Specifies whether function call should stop on exceptions and mute console. Overrides setPauseOnException state.",
              hidden: true,
            },
            {
              name: "returnByValue",
              type: "boolean",
              optional: true,
              description:
                "Whether the result is expected to be a JSON object which should be sent by value.",
            },
            {
              name: "generatePreview",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "Whether preview should be generated for the result.",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "RemoteObject",
              description: "Call result.",
            },
            {
              name: "wasThrown",
              type: "boolean",
              optional: true,
              description:
                "True if the result was thrown during the evaluation.",
            },
          ],
          description:
            "Calls function with given declaration on the given object. Object group of the result is inherited from the target object.",
        },
        {
          name: "getProperties",
          parameters: [
            {
              name: "objectId",
              $ref: "RemoteObjectId",
              description: "Identifier of the object to return properties for.",
            },
            {
              name: "ownProperties",
              optional: true,
              type: "boolean",
              description:
                "If true, returns properties belonging only to the element itself, not to its prototype chain.",
            },
            {
              name: "accessorPropertiesOnly",
              optional: true,
              type: "boolean",
              description:
                "If true, returns accessor properties (with getter/setter) only; internal properties are not returned either.",
              hidden: true,
            },
          ],
          returns: [
            {
              name: "result",
              type: "array",
              items: { $ref: "PropertyDescriptor" },
              description: "Object properties.",
            },
            {
              name: "internalProperties",
              optional: true,
              type: "array",
              items: { $ref: "InternalPropertyDescriptor" },
              description:
                "Internal object properties (only of the element itself).",
              hidden: true,
            },
          ],
          description:
            "Returns properties of a given object. Object group of the result is inherited from the target object.",
        },
        {
          name: "releaseObject",
          parameters: [
            {
              name: "objectId",
              $ref: "RemoteObjectId",
              description: "Identifier of the object to release.",
            },
          ],
          description: "Releases remote object with given id.",
        },
        {
          name: "releaseObjectGroup",
          parameters: [
            {
              name: "objectGroup",
              type: "string",
              description: "Symbolic object group name.",
            },
          ],
          description:
            "Releases all remote objects that belong to a given group.",
        },
        {
          name: "run",
          hidden: true,
          description:
            "Tells inspected instance(worker or page) that it can run in case it was started paused.",
        },
        {
          name: "enable",
          description:
            "Enables reporting of execution contexts creation by means of <code>executionContextCreated</code> event. When the reporting gets enabled the event will be sent immediately for each existing execution context.",
        },
        {
          name: "disable",
          hidden: true,
          description: "Disables reporting of execution contexts creation.",
        },
      ],
      events: [
        {
          name: "executionContextCreated",
          parameters: [
            {
              name: "context",
              $ref: "ExecutionContextDescription",
              description: "A newly created execution contex.",
            },
          ],
          description: "Issued when new execution context is created.",
        },
      ],
    },
    {
      domain: "Console",
      description:
        "Console domain defines methods and events for interaction with the JavaScript console. Console collects messages created by means of the <a href='http://getfirebug.com/wiki/index.php/Console_API'>JavaScript Console API</a>. One needs to enable this domain using <code>enable</code> command in order to start receiving the console messages. Browser collects messages issued while console domain is not enabled as well and reports them using <code>messageAdded</code> notification upon enabling.",
      types: [
        {
          id: "Timestamp",
          type: "number",
          description: "Number of seconds since epoch.",
          hidden: true,
        },
        {
          id: "ConsoleMessage",
          type: "object",
          description: "Console message.",
          properties: [
            {
              name: "source",
              type: "string",
              enum: [
                "xml",
                "javascript",
                "network",
                "console-api",
                "storage",
                "appcache",
                "rendering",
                "css",
                "security",
                "other",
                "deprecation",
              ],
              description: "Message source.",
            },
            {
              name: "level",
              type: "string",
              enum: ["log", "warning", "error", "debug"],
              description: "Message severity.",
            },
            { name: "text", type: "string", description: "Message text." },
            {
              name: "type",
              type: "string",
              optional: true,
              enum: [
                "log",
                "dir",
                "dirxml",
                "table",
                "trace",
                "clear",
                "startGroup",
                "startGroupCollapsed",
                "endGroup",
                "assert",
                "timing",
                "profile",
                "profileEnd",
              ],
              description: "Console message type.",
            },
            {
              name: "url",
              type: "string",
              optional: true,
              description: "URL of the message origin.",
            },
            {
              name: "line",
              type: "integer",
              optional: true,
              description:
                "Line number in the resource that generated this message.",
            },
            {
              name: "column",
              type: "integer",
              optional: true,
              description:
                "Column number in the resource that generated this message.",
            },
            {
              name: "repeatCount",
              type: "integer",
              optional: true,
              description: "Repeat count for repeated messages.",
            },
            {
              name: "parameters",
              type: "array",
              items: { $ref: "Runtime.RemoteObject" },
              optional: true,
              description:
                "Message parameters in case of the formatted message.",
            },
            {
              name: "stackTrace",
              $ref: "StackTrace",
              optional: true,
              description:
                "JavaScript stack trace for assertions and error messages.",
            },
            {
              name: "networkRequestId",
              $ref: "Network.RequestId",
              optional: true,
              description:
                "Identifier of the network request associated with this message.",
            },
            {
              name: "timestamp",
              $ref: "Timestamp",
              description: "Timestamp, when this message was fired.",
              hidden: true,
            },
          ],
        },
        {
          id: "CallFrame",
          type: "object",
          description: "Stack entry for console errors and assertions.",
          properties: [
            {
              name: "functionName",
              type: "string",
              description: "JavaScript function name.",
            },
            {
              name: "scriptId",
              type: "string",
              description: "JavaScript script id.",
            },
            {
              name: "url",
              type: "string",
              description: "JavaScript script name or url.",
            },
            {
              name: "lineNumber",
              type: "integer",
              description: "JavaScript script line number.",
            },
            {
              name: "columnNumber",
              type: "integer",
              description: "JavaScript script column number.",
            },
          ],
        },
        {
          id: "StackTrace",
          type: "array",
          items: { $ref: "CallFrame" },
          description: "Call frames for assertions or error messages.",
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables console domain, sends the messages collected so far to the client by means of the <code>messageAdded</code> notification.",
        },
        {
          name: "disable",
          description:
            "Disables console domain, prevents further console messages from being reported to the client.",
        },
        {
          name: "clearMessages",
          description: "Clears console messages collected in the browser.",
        },
        {
          name: "setMonitoringXHREnabled",
          parameters: [
            {
              name: "enabled",
              type: "boolean",
              description: "Monitoring enabled state.",
            },
          ],
          description:
            "Toggles monitoring of XMLHttpRequest. If <code>true</code>, console will receive messages upon each XHR issued.",
          hidden: true,
        },
        {
          name: "addInspectedNode",
          parameters: [
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              description:
                "DOM node id to be accessible by means of $x command line API.",
            },
          ],
          description:
            "Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions).",
          hidden: true,
        },
        {
          name: "addInspectedHeapObject",
          parameters: [{ name: "heapObjectId", type: "integer" }],
          hidden: true,
        },
      ],
      events: [
        {
          name: "messageAdded",
          parameters: [
            {
              name: "message",
              $ref: "ConsoleMessage",
              description: "Console message that has been added.",
            },
          ],
          description: "Issued when new console message is added.",
        },
        {
          name: "messageRepeatCountUpdated",
          parameters: [
            {
              name: "count",
              type: "integer",
              description: "New repeat count value.",
            },
            {
              name: "timestamp",
              $ref: "Timestamp",
              description: "Timestamp of most recent message in batch.",
              hidden: true,
            },
          ],
          description:
            "Issued when subsequent message(s) are equal to the previous one(s).",
        },
        {
          name: "messagesCleared",
          description:
            "Issued when console is cleared. This happens either upon <code>clearMessages</code> command or after page navigation.",
        },
      ],
    },
    {
      domain: "Network",
      description:
        "Network domain allows tracking network activities of the page. It exposes information about http, file, data and other requests and responses, their headers, bodies, timing, etc.",
      types: [
        {
          id: "LoaderId",
          type: "string",
          description: "Unique loader identifier.",
        },
        {
          id: "RequestId",
          type: "string",
          description: "Unique request identifier.",
        },
        {
          id: "Timestamp",
          type: "number",
          description: "Number of seconds since epoch.",
        },
        {
          id: "Headers",
          type: "object",
          description:
            "Request / response headers as keys / values of JSON object.",
        },
        {
          id: "ResourceTiming",
          type: "object",
          description: "Timing information for the request.",
          properties: [
            {
              name: "requestTime",
              type: "number",
              description:
                "Timing's requestTime is a baseline in seconds, while the other numbers are ticks in milliseconds relatively to this requestTime.",
            },
            {
              name: "proxyStart",
              type: "number",
              description: "Started resolving proxy.",
            },
            {
              name: "proxyEnd",
              type: "number",
              description: "Finished resolving proxy.",
            },
            {
              name: "dnsStart",
              type: "number",
              description: "Started DNS address resolve.",
            },
            {
              name: "dnsEnd",
              type: "number",
              description: "Finished DNS address resolve.",
            },
            {
              name: "connectStart",
              type: "number",
              description: "Started connecting to the remote host.",
            },
            {
              name: "connectEnd",
              type: "number",
              description: "Connected to the remote host.",
            },
            {
              name: "sslStart",
              type: "number",
              description: "Started SSL handshake.",
            },
            {
              name: "sslEnd",
              type: "number",
              description: "Finished SSL handshake.",
            },
            {
              name: "sendStart",
              type: "number",
              description: "Started sending request.",
            },
            {
              name: "sendEnd",
              type: "number",
              description: "Finished sending request.",
            },
            {
              name: "receiveHeadersEnd",
              type: "number",
              description: "Finished receiving response headers.",
            },
          ],
        },
        {
          id: "Request",
          type: "object",
          description: "HTTP request data.",
          properties: [
            { name: "url", type: "string", description: "Request URL." },
            {
              name: "method",
              type: "string",
              description: "HTTP request method.",
            },
            {
              name: "headers",
              $ref: "Headers",
              description: "HTTP request headers.",
            },
            {
              name: "postData",
              type: "string",
              optional: true,
              description: "HTTP POST request data.",
            },
          ],
        },
        {
          id: "Response",
          type: "object",
          description: "HTTP response data.",
          properties: [
            {
              name: "url",
              type: "string",
              description:
                "Response URL. This URL can be different from CachedResource.url in case of redirect.",
            },
            {
              name: "status",
              type: "number",
              description: "HTTP response status code.",
            },
            {
              name: "statusText",
              type: "string",
              description: "HTTP response status text.",
            },
            {
              name: "headers",
              $ref: "Headers",
              description: "HTTP response headers.",
            },
            {
              name: "headersText",
              type: "string",
              optional: true,
              description: "HTTP response headers text.",
            },
            {
              name: "mimeType",
              type: "string",
              description: "Resource mimeType as determined by the browser.",
            },
            {
              name: "requestHeaders",
              $ref: "Headers",
              optional: true,
              description:
                "Refined HTTP request headers that were actually transmitted over the network.",
            },
            {
              name: "requestHeadersText",
              type: "string",
              optional: true,
              description: "HTTP request headers text.",
            },
            {
              name: "connectionReused",
              type: "boolean",
              description:
                "Specifies whether physical connection was actually reused for this request.",
            },
            {
              name: "connectionId",
              type: "number",
              description:
                "Physical connection id that was actually used for this request.",
            },
            {
              name: "fromDiskCache",
              type: "boolean",
              optional: true,
              description:
                "Specifies that the request was served from the disk cache.",
            },
            {
              name: "timing",
              $ref: "ResourceTiming",
              optional: true,
              description: "Timing information for the given request.",
            },
          ],
        },
        {
          id: "WebSocketRequest",
          type: "object",
          description: "WebSocket request data.",
          hidden: true,
          properties: [
            {
              name: "headers",
              $ref: "Headers",
              description: "HTTP response headers.",
            },
          ],
        },
        {
          id: "WebSocketResponse",
          type: "object",
          description: "WebSocket response data.",
          hidden: true,
          properties: [
            {
              name: "status",
              type: "number",
              description: "HTTP response status code.",
            },
            {
              name: "statusText",
              type: "string",
              description: "HTTP response status text.",
            },
            {
              name: "headers",
              $ref: "Headers",
              description: "HTTP response headers.",
            },
          ],
        },
        {
          id: "WebSocketFrame",
          type: "object",
          description: "WebSocket frame data.",
          hidden: true,
          properties: [
            {
              name: "opcode",
              type: "number",
              description: "WebSocket frame opcode.",
            },
            {
              name: "mask",
              type: "boolean",
              description: "WebSocke frame mask.",
            },
            {
              name: "payloadData",
              type: "string",
              description: "WebSocke frame payload data.",
            },
          ],
        },
        {
          id: "CachedResource",
          type: "object",
          description: "Information about the cached resource.",
          properties: [
            {
              name: "url",
              type: "string",
              description:
                "Resource URL. This is the url of the original network request.",
            },
            {
              name: "type",
              $ref: "Page.ResourceType",
              description: "Type of this resource.",
            },
            {
              name: "response",
              $ref: "Response",
              optional: true,
              description: "Cached response data.",
            },
            {
              name: "bodySize",
              type: "number",
              description: "Cached response body size.",
            },
          ],
        },
        {
          id: "Initiator",
          type: "object",
          description: "Information about the request initiator.",
          properties: [
            {
              name: "type",
              type: "string",
              enum: ["parser", "script", "other"],
              description: "Type of this initiator.",
            },
            {
              name: "stackTrace",
              $ref: "Console.StackTrace",
              optional: true,
              description:
                "Initiator JavaScript stack trace, set for Script only.",
            },
            {
              name: "url",
              type: "string",
              optional: true,
              description: "Initiator URL, set for Parser type only.",
            },
            {
              name: "lineNumber",
              type: "number",
              optional: true,
              description: "Initiator line number, set for Parser type only.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables network tracking, network events will now be delivered to the client.",
        },
        {
          name: "disable",
          description:
            "Disables network tracking, prevents network events from being sent to the client.",
        },
        {
          name: "setUserAgentOverride",
          description: "Allows overriding user agent with the given string.",
          parameters: [
            {
              name: "userAgent",
              type: "string",
              description: "User agent to use.",
            },
          ],
        },
        {
          name: "setExtraHTTPHeaders",
          description:
            "Specifies whether to always send extra HTTP headers with the requests from this page.",
          parameters: [
            {
              name: "headers",
              $ref: "Headers",
              description: "Map with extra HTTP headers.",
            },
          ],
        },
        {
          name: "getResponseBody",
          description: "Returns content served for the given request.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description:
                "Identifier of the network request to get content for.",
            },
          ],
          returns: [
            { name: "body", type: "string", description: "Response body." },
            {
              name: "base64Encoded",
              type: "boolean",
              description: "True, if content was sent as base64.",
            },
          ],
        },
        {
          name: "replayXHR",
          description:
            "This method sends a new XMLHttpRequest which is identical to the original one. The following parameters should be identical: method, url, async, request body, extra headers, withCredentials attribute, user, password.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Identifier of XHR to replay.",
            },
          ],
          hidden: true,
        },
        {
          name: "canClearBrowserCache",
          description: "Tells whether clearing browser cache is supported.",
          returns: [
            {
              name: "result",
              type: "boolean",
              description: "True if browser cache can be cleared.",
            },
          ],
        },
        {
          name: "clearBrowserCache",
          description: "Clears browser cache.",
        },
        {
          name: "canClearBrowserCookies",
          description: "Tells whether clearing browser cookies is supported.",
          returns: [
            {
              name: "result",
              type: "boolean",
              description: "True if browser cookies can be cleared.",
            },
          ],
        },
        {
          name: "clearBrowserCookies",
          description: "Clears browser cookies.",
        },
        {
          name: "setCacheDisabled",
          parameters: [
            {
              name: "cacheDisabled",
              type: "boolean",
              description: "Cache disabled state.",
            },
          ],
          description:
            "Toggles ignoring cache for each request. If <code>true</code>, cache will not be used.",
        },
        {
          name: "loadResourceForFrontend",
          async: true,
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Frame to load the resource from.",
            },
            {
              name: "url",
              type: "string",
              description: "URL of the resource to load.",
            },
            {
              name: "requestHeaders",
              $ref: "Network.Headers",
              optional: true,
              description: "Request headers.",
            },
          ],
          returns: [
            {
              name: "statusCode",
              type: "number",
              description: "HTTP status code.",
            },
            {
              name: "responseHeaders",
              $ref: "Network.Headers",
              description: "Response headers.",
            },
            {
              name: "content",
              type: "string",
              description: "Resource content.",
            },
          ],
          description:
            "Loads a resource in the context of a frame on the inspected page without cross origin checks.",
          hidden: true,
        },
      ],
      events: [
        {
          name: "requestWillBeSent",
          description: "Fired when page is about to send HTTP request.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Frame identifier.",
              hidden: true,
            },
            {
              name: "loaderId",
              $ref: "LoaderId",
              description: "Loader identifier.",
            },
            {
              name: "documentURL",
              type: "string",
              description: "URL of the document this request is loaded for.",
            },
            { name: "request", $ref: "Request", description: "Request data." },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "initiator",
              $ref: "Initiator",
              description: "Request initiator.",
            },
            {
              name: "redirectResponse",
              optional: true,
              $ref: "Response",
              description: "Redirect response data.",
            },
          ],
        },
        {
          name: "requestServedFromCache",
          description: "Fired if request ended up loading from cache.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
          ],
        },
        {
          name: "responseReceived",
          description: "Fired when HTTP response is available.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Frame identifier.",
              hidden: true,
            },
            {
              name: "loaderId",
              $ref: "LoaderId",
              description: "Loader identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "type",
              $ref: "Page.ResourceType",
              description: "Resource type.",
            },
            {
              name: "response",
              $ref: "Response",
              description: "Response data.",
            },
          ],
        },
        {
          name: "dataReceived",
          description: "Fired when data chunk was received over the network.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "dataLength",
              type: "integer",
              description: "Data chunk length.",
            },
            {
              name: "encodedDataLength",
              type: "integer",
              description:
                "Actual bytes received (might be less than dataLength for compressed encodings).",
            },
          ],
        },
        {
          name: "loadingFinished",
          description: "Fired when HTTP request has finished loading.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
          ],
        },
        {
          name: "loadingFailed",
          description: "Fired when HTTP request has failed to load.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "errorText",
              type: "string",
              description: "User friendly error message.",
            },
            {
              name: "canceled",
              type: "boolean",
              optional: true,
              description: "True if loading was canceled.",
            },
          ],
        },
        {
          name: "webSocketWillSendHandshakeRequest",
          description: "Fired when WebSocket is about to initiate handshake.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "request",
              $ref: "WebSocketRequest",
              description: "WebSocket request data.",
            },
          ],
          hidden: true,
        },
        {
          name: "webSocketHandshakeResponseReceived",
          description:
            "Fired when WebSocket handshake response becomes available.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "response",
              $ref: "WebSocketResponse",
              description: "WebSocket response data.",
            },
          ],
          hidden: true,
        },
        {
          name: "webSocketCreated",
          description: "Fired upon WebSocket creation.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            {
              name: "url",
              type: "string",
              description: "WebSocket request URL.",
            },
          ],
          hidden: true,
        },
        {
          name: "webSocketClosed",
          description: "Fired when WebSocket is closed.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
          ],
          hidden: true,
        },
        {
          name: "webSocketFrameReceived",
          description: "Fired when WebSocket frame is received.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "response",
              $ref: "WebSocketFrame",
              description: "WebSocket response data.",
            },
          ],
          hidden: true,
        },
        {
          name: "webSocketFrameError",
          description: "Fired when WebSocket frame error occurs.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "errorMessage",
              type: "string",
              description: "WebSocket frame error message.",
            },
          ],
          hidden: true,
        },
        {
          name: "webSocketFrameSent",
          description: "Fired when WebSocket frame is sent.",
          parameters: [
            {
              name: "requestId",
              $ref: "RequestId",
              description: "Request identifier.",
            },
            { name: "timestamp", $ref: "Timestamp", description: "Timestamp." },
            {
              name: "response",
              $ref: "WebSocketFrame",
              description: "WebSocket response data.",
            },
          ],
          hidden: true,
        },
      ],
    },
    {
      domain: "Database",
      hidden: true,
      types: [
        {
          id: "DatabaseId",
          type: "string",
          description: "Unique identifier of Database object.",
          hidden: true,
        },
        {
          id: "Database",
          type: "object",
          description: "Database object.",
          hidden: true,
          properties: [
            { name: "id", $ref: "DatabaseId", description: "Database ID." },
            { name: "domain", type: "string", description: "Database domain." },
            { name: "name", type: "string", description: "Database name." },
            {
              name: "version",
              type: "string",
              description: "Database version.",
            },
          ],
        },
        {
          id: "Error",
          type: "object",
          description: "Database error.",
          properties: [
            { name: "message", type: "string", description: "Error message." },
            { name: "code", type: "integer", description: "Error code." },
          ],
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables database tracking, database events will now be delivered to the client.",
        },
        {
          name: "disable",
          description:
            "Disables database tracking, prevents database events from being sent to the client.",
        },
        {
          name: "getDatabaseTableNames",
          parameters: [{ name: "databaseId", $ref: "DatabaseId" }],
          returns: [
            { name: "tableNames", type: "array", items: { type: "string" } },
          ],
        },
        {
          name: "executeSQL",
          async: true,
          parameters: [
            { name: "databaseId", $ref: "DatabaseId" },
            { name: "query", type: "string" },
          ],
          returns: [
            {
              name: "columnNames",
              type: "array",
              optional: true,
              items: { type: "string" },
            },
            {
              name: "values",
              type: "array",
              optional: true,
              items: { type: "any" },
            },
            { name: "sqlError", $ref: "Error", optional: true },
          ],
        },
      ],
      events: [
        {
          name: "addDatabase",
          parameters: [{ name: "database", $ref: "Database" }],
        },
      ],
    },
    {
      domain: "IndexedDB",
      hidden: true,
      types: [
        {
          id: "DatabaseWithObjectStores",
          type: "object",
          description: "Database with an array of object stores.",
          properties: [
            { name: "name", type: "string", description: "Database name." },
            {
              name: "version",
              type: "integer",
              description: "Database version.",
            },
            {
              name: "objectStores",
              type: "array",
              items: { $ref: "ObjectStore" },
              description: "Object stores in this database.",
            },
          ],
        },
        {
          id: "ObjectStore",
          type: "object",
          description: "Object store.",
          properties: [
            { name: "name", type: "string", description: "Object store name." },
            {
              name: "keyPath",
              $ref: "KeyPath",
              description: "Object store key path.",
            },
            {
              name: "autoIncrement",
              type: "boolean",
              description: "If true, object store has auto increment flag set.",
            },
            {
              name: "indexes",
              type: "array",
              items: { $ref: "ObjectStoreIndex" },
              description: "Indexes in this object store.",
            },
          ],
        },
        {
          id: "ObjectStoreIndex",
          type: "object",
          description: "Object store index.",
          properties: [
            { name: "name", type: "string", description: "Index name." },
            {
              name: "keyPath",
              $ref: "KeyPath",
              description: "Index key path.",
            },
            {
              name: "unique",
              type: "boolean",
              description: "If true, index is unique.",
            },
            {
              name: "multiEntry",
              type: "boolean",
              description: "If true, index allows multiple entries for a key.",
            },
          ],
        },
        {
          id: "Key",
          type: "object",
          description: "Key.",
          properties: [
            {
              name: "type",
              type: "string",
              enum: ["number", "string", "date", "array"],
              description: "Key type.",
            },
            {
              name: "number",
              type: "number",
              optional: true,
              description: "Number value.",
            },
            {
              name: "string",
              type: "string",
              optional: true,
              description: "String value.",
            },
            {
              name: "date",
              type: "number",
              optional: true,
              description: "Date value.",
            },
            {
              name: "array",
              type: "array",
              optional: true,
              items: { $ref: "Key" },
              description: "Array value.",
            },
          ],
        },
        {
          id: "KeyRange",
          type: "object",
          description: "Key range.",
          properties: [
            {
              name: "lower",
              $ref: "Key",
              optional: true,
              description: "Lower bound.",
            },
            {
              name: "upper",
              $ref: "Key",
              optional: true,
              description: "Upper bound.",
            },
            {
              name: "lowerOpen",
              type: "boolean",
              description: "If true lower bound is open.",
            },
            {
              name: "upperOpen",
              type: "boolean",
              description: "If true upper bound is open.",
            },
          ],
        },
        {
          id: "DataEntry",
          type: "object",
          description: "Data entry.",
          properties: [
            { name: "key", $ref: "Runtime.RemoteObject", description: "Key." },
            {
              name: "primaryKey",
              $ref: "Runtime.RemoteObject",
              description: "Primary key.",
            },
            {
              name: "value",
              $ref: "Runtime.RemoteObject",
              description: "Value.",
            },
          ],
        },
        {
          id: "KeyPath",
          type: "object",
          description: "Key path.",
          properties: [
            {
              name: "type",
              type: "string",
              enum: ["null", "string", "array"],
              description: "Key path type.",
            },
            {
              name: "string",
              type: "string",
              optional: true,
              description: "String value.",
            },
            {
              name: "array",
              type: "array",
              optional: true,
              items: { type: "string" },
              description: "Array value.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "enable",
          description: "Enables events from backend.",
        },
        {
          name: "disable",
          description: "Disables events from backend.",
        },
        {
          name: "requestDatabaseNames",
          async: true,
          parameters: [
            {
              name: "securityOrigin",
              type: "string",
              description: "Security origin.",
            },
          ],
          returns: [
            {
              name: "databaseNames",
              type: "array",
              items: { type: "string" },
              description: "Database names for origin.",
            },
          ],
          description: "Requests database names for given security origin.",
        },
        {
          name: "requestDatabase",
          async: true,
          parameters: [
            {
              name: "securityOrigin",
              type: "string",
              description: "Security origin.",
            },
            {
              name: "databaseName",
              type: "string",
              description: "Database name.",
            },
          ],
          returns: [
            {
              name: "databaseWithObjectStores",
              $ref: "DatabaseWithObjectStores",
              description: "Database with an array of object stores.",
            },
          ],
          description: "Requests database with given name in given frame.",
        },
        {
          name: "requestData",
          async: true,
          parameters: [
            {
              name: "securityOrigin",
              type: "string",
              description: "Security origin.",
            },
            {
              name: "databaseName",
              type: "string",
              description: "Database name.",
            },
            {
              name: "objectStoreName",
              type: "string",
              description: "Object store name.",
            },
            {
              name: "indexName",
              type: "string",
              description:
                "Index name, empty string for object store data requests.",
            },
            {
              name: "skipCount",
              type: "integer",
              description: "Number of records to skip.",
            },
            {
              name: "pageSize",
              type: "integer",
              description: "Number of records to fetch.",
            },
            {
              name: "keyRange",
              $ref: "KeyRange",
              optional: true,
              description: "Key range.",
            },
          ],
          returns: [
            {
              name: "objectStoreDataEntries",
              type: "array",
              items: { $ref: "DataEntry" },
              description: "Array of object store data entries.",
            },
            {
              name: "hasMore",
              type: "boolean",
              description:
                "If true, there are more entries to fetch in the given range.",
            },
          ],
          description: "Requests data from object store or index.",
        },
        {
          name: "clearObjectStore",
          async: true,
          parameters: [
            {
              name: "securityOrigin",
              type: "string",
              description: "Security origin.",
            },
            {
              name: "databaseName",
              type: "string",
              description: "Database name.",
            },
            {
              name: "objectStoreName",
              type: "string",
              description: "Object store name.",
            },
          ],
          returns: [],
          description: "Clears all entries from an object store.",
        },
      ],
    },
    {
      domain: "DOMStorage",
      hidden: true,
      description: "Query and modify DOM storage.",
      types: [
        {
          id: "StorageId",
          type: "object",
          description: "DOM Storage identifier.",
          hidden: true,
          properties: [
            {
              name: "securityOrigin",
              type: "string",
              description: "Security origin for the storage.",
            },
            {
              name: "isLocalStorage",
              type: "boolean",
              description:
                "Whether the storage is local storage (not session storage).",
            },
          ],
        },
        {
          id: "Item",
          type: "array",
          description: "DOM Storage item.",
          hidden: true,
          items: { type: "string" },
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables storage tracking, storage events will now be delivered to the client.",
        },
        {
          name: "disable",
          description:
            "Disables storage tracking, prevents storage events from being sent to the client.",
        },
        {
          name: "getDOMStorageItems",
          parameters: [{ name: "storageId", $ref: "StorageId" }],
          returns: [
            { name: "entries", type: "array", items: { $ref: "Item" } },
          ],
        },
        {
          name: "setDOMStorageItem",
          parameters: [
            { name: "storageId", $ref: "StorageId" },
            { name: "key", type: "string" },
            { name: "value", type: "string" },
          ],
        },
        {
          name: "removeDOMStorageItem",
          parameters: [
            { name: "storageId", $ref: "StorageId" },
            { name: "key", type: "string" },
          ],
        },
      ],
      events: [
        {
          name: "domStorageItemsCleared",
          parameters: [{ name: "storageId", $ref: "StorageId" }],
        },
        {
          name: "domStorageItemRemoved",
          parameters: [
            { name: "storageId", $ref: "StorageId" },
            { name: "key", type: "string" },
          ],
        },
        {
          name: "domStorageItemAdded",
          parameters: [
            { name: "storageId", $ref: "StorageId" },
            { name: "key", type: "string" },
            { name: "newValue", type: "string" },
          ],
        },
        {
          name: "domStorageItemUpdated",
          parameters: [
            { name: "storageId", $ref: "StorageId" },
            { name: "key", type: "string" },
            { name: "oldValue", type: "string" },
            { name: "newValue", type: "string" },
          ],
        },
      ],
    },
    {
      domain: "ApplicationCache",
      hidden: true,
      types: [
        {
          id: "ApplicationCacheResource",
          type: "object",
          description: "Detailed application cache resource information.",
          properties: [
            { name: "url", type: "string", description: "Resource url." },
            { name: "size", type: "integer", description: "Resource size." },
            { name: "type", type: "string", description: "Resource type." },
          ],
        },
        {
          id: "ApplicationCache",
          type: "object",
          description: "Detailed application cache information.",
          properties: [
            {
              name: "manifestURL",
              type: "string",
              description: "Manifest URL.",
            },
            {
              name: "size",
              type: "number",
              description: "Application cache size.",
            },
            {
              name: "creationTime",
              type: "number",
              description: "Application cache creation time.",
            },
            {
              name: "updateTime",
              type: "number",
              description: "Application cache update time.",
            },
            {
              name: "resources",
              type: "array",
              items: { $ref: "ApplicationCacheResource" },
              description: "Application cache resources.",
            },
          ],
        },
        {
          id: "FrameWithManifest",
          type: "object",
          description: "Frame identifier - manifest URL pair.",
          properties: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Frame identifier.",
            },
            {
              name: "manifestURL",
              type: "string",
              description: "Manifest URL.",
            },
            {
              name: "status",
              type: "integer",
              description: "Application cache status.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "getFramesWithManifests",
          returns: [
            {
              name: "frameIds",
              type: "array",
              items: { $ref: "FrameWithManifest" },
              description:
                "Array of frame identifiers with manifest urls for each frame containing a document associated with some application cache.",
            },
          ],
          description:
            "Returns array of frame identifiers with manifest urls for each frame containing a document associated with some application cache.",
        },
        {
          name: "enable",
          description: "Enables application cache domain notifications.",
        },
        {
          name: "getManifestForFrame",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description:
                "Identifier of the frame containing document whose manifest is retrieved.",
            },
          ],
          returns: [
            {
              name: "manifestURL",
              type: "string",
              description: "Manifest URL for document in the given frame.",
            },
          ],
          description: "Returns manifest URL for document in the given frame.",
        },
        {
          name: "getApplicationCacheForFrame",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description:
                "Identifier of the frame containing document whose application cache is retrieved.",
            },
          ],
          returns: [
            {
              name: "applicationCache",
              $ref: "ApplicationCache",
              description:
                "Relevant application cache data for the document in given frame.",
            },
          ],
          description:
            "Returns relevant application cache data for the document in given frame.",
        },
      ],
      events: [
        {
          name: "applicationCacheStatusUpdated",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description:
                "Identifier of the frame containing document whose application cache updated status.",
            },
            {
              name: "manifestURL",
              type: "string",
              description: "Manifest URL.",
            },
            {
              name: "status",
              type: "integer",
              description: "Updated application cache status.",
            },
          ],
        },
        {
          name: "networkStateUpdated",
          parameters: [{ name: "isNowOnline", type: "boolean" }],
        },
      ],
    },
    {
      domain: "FileSystem",
      hidden: true,
      types: [
        {
          id: "Entry",
          type: "object",
          properties: [
            {
              name: "url",
              type: "string",
              description: "filesystem: URL for the entry.",
            },
            {
              name: "name",
              type: "string",
              description: "The name of the file or directory.",
            },
            {
              name: "isDirectory",
              type: "boolean",
              description: "True if the entry is a directory.",
            },
            {
              name: "mimeType",
              type: "string",
              optional: true,
              description: "MIME type of the entry, available for a file only.",
            },
            {
              name: "resourceType",
              $ref: "Page.ResourceType",
              optional: true,
              description:
                "ResourceType of the entry, available for a file only.",
            },
            {
              name: "isTextFile",
              type: "boolean",
              optional: true,
              description: "True if the entry is a text file.",
            },
          ],
          description: "Represents a browser side file or directory.",
        },
        {
          id: "Metadata",
          type: "object",
          properties: [
            {
              name: "modificationTime",
              type: "number",
              description: "Modification time.",
            },
            {
              name: "size",
              type: "number",
              description:
                "File size. This field is always zero for directories.",
            },
          ],
          description: "Represents metadata of a file or entry.",
        },
      ],
      commands: [
        {
          name: "enable",
          description: "Enables events from backend.",
        },
        {
          name: "disable",
          description: "Disables events from backend.",
        },
        {
          name: "requestFileSystemRoot",
          async: true,
          parameters: [
            {
              name: "origin",
              type: "string",
              description:
                "Security origin of requesting FileSystem. One of frames in current page needs to have this security origin.",
            },
            {
              name: "type",
              type: "string",
              enum: ["temporary", "persistent"],
              description: "FileSystem type of requesting FileSystem.",
            },
          ],
          returns: [
            {
              name: "errorCode",
              type: "integer",
              description:
                "0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.",
            },
            {
              name: "root",
              $ref: "Entry",
              optional: true,
              description:
                "Contains root of the requested FileSystem if the command completed successfully.",
            },
          ],
          description: "Returns root directory of the FileSystem, if exists.",
        },
        {
          name: "requestDirectoryContent",
          async: true,
          parameters: [
            {
              name: "url",
              type: "string",
              description:
                "URL of the directory that the frontend is requesting to read from.",
            },
          ],
          returns: [
            {
              name: "errorCode",
              type: "integer",
              description:
                "0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.",
            },
            {
              name: "entries",
              type: "array",
              items: { $ref: "Entry" },
              optional: true,
              description:
                "Contains all entries on directory if the command completed successfully.",
            },
          ],
          description: "Returns content of the directory.",
        },
        {
          name: "requestMetadata",
          async: true,
          parameters: [
            {
              name: "url",
              type: "string",
              description:
                "URL of the entry that the frontend is requesting to get metadata from.",
            },
          ],
          returns: [
            {
              name: "errorCode",
              type: "integer",
              description:
                "0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.",
            },
            {
              name: "metadata",
              $ref: "Metadata",
              optional: true,
              description:
                "Contains metadata of the entry if the command completed successfully.",
            },
          ],
          description: "Returns metadata of the entry.",
        },
        {
          name: "requestFileContent",
          async: true,
          parameters: [
            {
              name: "url",
              type: "string",
              description:
                "URL of the file that the frontend is requesting to read from.",
            },
            {
              name: "readAsText",
              type: "boolean",
              description:
                "True if the content should be read as text, otherwise the result will be returned as base64 encoded text.",
            },
            {
              name: "start",
              type: "integer",
              optional: true,
              description: "Specifies the start of range to read.",
            },
            {
              name: "end",
              type: "integer",
              optional: true,
              description: "Specifies the end of range to read exclusively.",
            },
            {
              name: "charset",
              type: "string",
              optional: true,
              description:
                "Overrides charset of the content when content is served as text.",
            },
          ],
          returns: [
            {
              name: "errorCode",
              type: "integer",
              description:
                "0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value.",
            },
            {
              name: "content",
              type: "string",
              optional: true,
              description: "Content of the file.",
            },
            {
              name: "charset",
              type: "string",
              optional: true,
              description: "Charset of the content if it is served as text.",
            },
          ],
          description:
            "Returns content of the file. Result should be sliced into [start, end).",
        },
        {
          name: "deleteEntry",
          async: true,
          parameters: [
            {
              name: "url",
              type: "string",
              description: "URL of the entry to delete.",
            },
          ],
          returns: [
            {
              name: "errorCode",
              type: "integer",
              description:
                "0, if no error. Otherwise errorCode is set to FileError::ErrorCode value.",
            },
          ],
          description:
            "Deletes specified entry. If the entry is a directory, the agent deletes children recursively.",
        },
      ],
    },
    {
      domain: "DOM",
      description:
        "This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an <code>id</code>. This <code>id</code> can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that <code>iframe</code> owner elements will return corresponding document elements as their child nodes.</p>",
      types: [
        {
          id: "NodeId",
          type: "integer",
          description: "Unique DOM node identifier.",
        },
        {
          id: "BackendNodeId",
          type: "integer",
          description:
            "Unique DOM node identifier used to reference a node that may not have been pushed to the front-end.",
          hidden: true,
        },
        {
          id: "Node",
          type: "object",
          properties: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description:
                "Node identifier that is passed into the rest of the DOM messages as the <code>nodeId</code>. Backend will only push node with given <code>id</code> once. It is aware of all requested nodes and will only fire DOM events for nodes known to the client.",
            },
            {
              name: "nodeType",
              type: "integer",
              description: "<code>Node</code>'s nodeType.",
            },
            {
              name: "nodeName",
              type: "string",
              description: "<code>Node</code>'s nodeName.",
            },
            {
              name: "localName",
              type: "string",
              description: "<code>Node</code>'s localName.",
            },
            {
              name: "nodeValue",
              type: "string",
              description: "<code>Node</code>'s nodeValue.",
            },
            {
              name: "childNodeCount",
              type: "integer",
              optional: true,
              description: "Child count for <code>Container</code> nodes.",
            },
            {
              name: "children",
              type: "array",
              optional: true,
              items: { $ref: "Node" },
              description:
                "Child nodes of this node when requested with children.",
            },
            {
              name: "attributes",
              type: "array",
              optional: true,
              items: { type: "string" },
              description:
                "Attributes of the <code>Element</code> node in the form of flat array <code>[name1, value1, name2, value2]</code>.",
            },
            {
              name: "documentURL",
              type: "string",
              optional: true,
              description:
                "Document URL that <code>Document</code> or <code>FrameOwner</code> node points to.",
            },
            {
              name: "baseURL",
              type: "string",
              optional: true,
              description:
                "Base URL that <code>Document</code> or <code>FrameOwner</code> node uses for URL completion.",
              hidden: true,
            },
            {
              name: "publicId",
              type: "string",
              optional: true,
              description: "<code>DocumentType</code>'s publicId.",
            },
            {
              name: "systemId",
              type: "string",
              optional: true,
              description: "<code>DocumentType</code>'s systemId.",
            },
            {
              name: "internalSubset",
              type: "string",
              optional: true,
              description: "<code>DocumentType</code>'s internalSubset.",
            },
            {
              name: "xmlVersion",
              type: "string",
              optional: true,
              description:
                "<code>Document</code>'s XML version in case of XML documents.",
            },
            {
              name: "name",
              type: "string",
              optional: true,
              description: "<code>Attr</code>'s name.",
            },
            {
              name: "value",
              type: "string",
              optional: true,
              description: "<code>Attr</code>'s value.",
            },
            {
              name: "frameId",
              $ref: "Page.FrameId",
              optional: true,
              description: "Frame ID for frame owner elements.",
              hidden: true,
            },
            {
              name: "contentDocument",
              $ref: "Node",
              optional: true,
              description: "Content document for frame owner elements.",
            },
            {
              name: "shadowRoots",
              type: "array",
              optional: true,
              items: { $ref: "Node" },
              description: "Shadow root list for given element host.",
              hidden: true,
            },
            {
              name: "templateContent",
              $ref: "Node",
              optional: true,
              description: "Content document fragment for template elements",
              hidden: true,
            },
          ],
          description:
            "DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes. DOMNode is a base node mirror type.",
        },
        {
          id: "EventListener",
          type: "object",
          hidden: true,
          properties: [
            {
              name: "type",
              type: "string",
              description: "<code>EventListener</code>'s type.",
            },
            {
              name: "useCapture",
              type: "boolean",
              description: "<code>EventListener</code>'s useCapture.",
            },
            {
              name: "isAttribute",
              type: "boolean",
              description: "<code>EventListener</code>'s isAttribute.",
            },
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Target <code>DOMNode</code> id.",
            },
            {
              name: "handlerBody",
              type: "string",
              description: "Event handler function body.",
            },
            {
              name: "location",
              $ref: "Debugger.Location",
              optional: true,
              description: "Handler code location.",
            },
            {
              name: "sourceName",
              type: "string",
              optional: true,
              description: "Source script URL.",
            },
            {
              name: "handler",
              $ref: "Runtime.RemoteObject",
              optional: true,
              description: "Event handler function value.",
            },
          ],
          description:
            "DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes. DOMNode is a base node mirror type.",
        },
        {
          id: "RGBA",
          type: "object",
          properties: [
            {
              name: "r",
              type: "integer",
              description: "The red component, in the [0-255] range.",
            },
            {
              name: "g",
              type: "integer",
              description: "The green component, in the [0-255] range.",
            },
            {
              name: "b",
              type: "integer",
              description: "The blue component, in the [0-255] range.",
            },
            {
              name: "a",
              type: "number",
              optional: true,
              description:
                "The alpha component, in the [0-1] range (default: 1).",
            },
          ],
          description: "A structure holding an RGBA color.",
        },
        {
          id: "Quad",
          type: "array",
          items: { type: "number" },
          minItems: 8,
          maxItems: 8,
          description:
            "An array of quad vertices, x immediately followed by y for each point, points clock-wise.",
          hidden: true,
        },
        {
          id: "BoxModel",
          type: "object",
          hidden: true,
          properties: [
            { name: "content", $ref: "Quad", description: "Content box" },
            { name: "padding", $ref: "Quad", description: "Padding box" },
            { name: "border", $ref: "Quad", description: "Border box" },
            { name: "margin", $ref: "Quad", description: "Margin box" },
            { name: "width", type: "integer", description: "Node width" },
            { name: "height", type: "integer", description: "Node height" },
            {
              name: "shapeOutside",
              type: "string",
              description: "CSS Shape Outside",
            },
          ],
          description: "Box model.",
        },
        {
          id: "Rect",
          type: "object",
          hidden: true,
          properties: [
            { name: "x", type: "number", description: "X coordinate" },
            { name: "y", type: "number", description: "Y coordinate" },
            { name: "width", type: "number", description: "Rectangle width" },
            { name: "height", type: "number", description: "Rectangle height" },
          ],
          description: "Rectangle.",
        },
        {
          id: "HighlightConfig",
          type: "object",
          properties: [
            {
              name: "showInfo",
              type: "boolean",
              optional: true,
              description:
                "Whether the node info tooltip should be shown (default: false).",
            },
            {
              name: "contentColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The content box highlight fill color (default: transparent).",
            },
            {
              name: "paddingColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The padding highlight fill color (default: transparent).",
            },
            {
              name: "borderColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The border highlight fill color (default: transparent).",
            },
            {
              name: "marginColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The margin highlight fill color (default: transparent).",
            },
            {
              name: "eventTargetColor",
              $ref: "RGBA",
              optional: true,
              hidden: true,
              description:
                "The event target element highlight fill color (default: transparent).",
            },
          ],
          description:
            "Configuration data for the highlighting of page elements.",
        },
      ],
      commands: [
        {
          name: "getDocument",
          returns: [
            { name: "root", $ref: "Node", description: "Resulting node." },
          ],
          description: "Returns the root DOM node to the caller.",
        },
        {
          name: "requestChildNodes",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to get children for.",
            },
            {
              name: "depth",
              type: "integer",
              optional: true,
              description:
                "The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0.",
              hidden: true,
            },
          ],
          description:
            "Requests that children of the node with given id are returned to the caller in form of <code>setChildNodes</code> events where not only immediate children are retrieved, but all children down to the specified depth.",
        },
        {
          name: "querySelector",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to query upon.",
            },
            {
              name: "selector",
              type: "string",
              description: "Selector string.",
            },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Query selector result.",
            },
          ],
          description: "Executes <code>querySelector</code> on a given node.",
        },
        {
          name: "querySelectorAll",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to query upon.",
            },
            {
              name: "selector",
              type: "string",
              description: "Selector string.",
            },
          ],
          returns: [
            {
              name: "nodeIds",
              type: "array",
              items: { $ref: "NodeId" },
              description: "Query selector result.",
            },
          ],
          description:
            "Executes <code>querySelectorAll</code> on a given node.",
        },
        {
          name: "setNodeName",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to set name for.",
            },
            { name: "name", type: "string", description: "New node's name." },
          ],
          returns: [
            { name: "nodeId", $ref: "NodeId", description: "New node's id." },
          ],
          description: "Sets node name for a node with given id.",
        },
        {
          name: "setNodeValue",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to set value for.",
            },
            { name: "value", type: "string", description: "New node's value." },
          ],
          description: "Sets node value for a node with given id.",
        },
        {
          name: "removeNode",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to remove.",
            },
          ],
          description: "Removes node with given id.",
        },
        {
          name: "setAttributeValue",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the element to set attribute for.",
            },
            { name: "name", type: "string", description: "Attribute name." },
            { name: "value", type: "string", description: "Attribute value." },
          ],
          description: "Sets attribute for an element with given id.",
        },
        {
          name: "setAttributesAsText",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the element to set attributes for.",
            },
            {
              name: "text",
              type: "string",
              description:
                "Text with a number of attributes. Will parse this text using HTML parser.",
            },
            {
              name: "name",
              type: "string",
              optional: true,
              description:
                "Attribute name to replace with new attributes derived from text in case text parsed successfully.",
            },
          ],
          description:
            "Sets attributes on element with given id. This method is useful when user edits some existing attribute value and types in several attribute name/value pairs.",
        },
        {
          name: "removeAttribute",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the element to remove attribute from.",
            },
            {
              name: "name",
              type: "string",
              description: "Name of the attribute to remove.",
            },
          ],
          description:
            "Removes attribute with given name from an element with given id.",
        },
        {
          name: "getEventListenersForNode",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to get listeners for.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "Symbolic group name for handler value. Handler value is not returned without this parameter specified.",
            },
          ],
          returns: [
            {
              name: "listeners",
              type: "array",
              items: { $ref: "EventListener" },
              description: "Array of relevant listeners.",
            },
          ],
          description: "Returns event listeners relevant to the node.",
          hidden: true,
        },
        {
          name: "getOuterHTML",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to get markup for.",
            },
          ],
          returns: [
            {
              name: "outerHTML",
              type: "string",
              description: "Outer HTML markup.",
            },
          ],
          description: "Returns node's HTML markup.",
        },
        {
          name: "setOuterHTML",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to set markup for.",
            },
            {
              name: "outerHTML",
              type: "string",
              description: "Outer HTML markup to set.",
            },
          ],
          description: "Sets node HTML markup, returns new node id.",
        },
        {
          name: "performSearch",
          parameters: [
            {
              name: "query",
              type: "string",
              description:
                "Plain text or query selector or XPath search query.",
            },
          ],
          returns: [
            {
              name: "searchId",
              type: "string",
              description: "Unique search session identifier.",
            },
            {
              name: "resultCount",
              type: "integer",
              description: "Number of search results.",
            },
          ],
          description:
            "Searches for a given string in the DOM tree. Use <code>getSearchResults</code> to access search results or <code>cancelSearch</code> to end this search session.",
          hidden: true,
        },
        {
          name: "getSearchResults",
          parameters: [
            {
              name: "searchId",
              type: "string",
              description: "Unique search session identifier.",
            },
            {
              name: "fromIndex",
              type: "integer",
              description: "Start index of the search result to be returned.",
            },
            {
              name: "toIndex",
              type: "integer",
              description: "End index of the search result to be returned.",
            },
          ],
          returns: [
            {
              name: "nodeIds",
              type: "array",
              items: { $ref: "NodeId" },
              description: "Ids of the search result nodes.",
            },
          ],
          description:
            "Returns search results from given <code>fromIndex</code> to given <code>toIndex</code> from the sarch with the given identifier.",
          hidden: true,
        },
        {
          name: "discardSearchResults",
          parameters: [
            {
              name: "searchId",
              type: "string",
              description: "Unique search session identifier.",
            },
          ],
          description:
            "Discards search results from the session with the given id. <code>getSearchResults</code> should no longer be called for that search.",
          hidden: true,
        },
        {
          name: "requestNode",
          parameters: [
            {
              name: "objectId",
              $ref: "Runtime.RemoteObjectId",
              description: "JavaScript object id to convert into node.",
            },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Node id for given object.",
            },
          ],
          description:
            "Requests that the node is sent to the caller given the JavaScript node object reference. All nodes that form the path from the node to the root are also sent to the client as a series of <code>setChildNodes</code> notifications.",
        },
        {
          name: "setInspectModeEnabled",
          hidden: true,
          parameters: [
            {
              name: "enabled",
              type: "boolean",
              description:
                "True to enable inspection mode, false to disable it.",
            },
            {
              name: "inspectShadowDOM",
              type: "boolean",
              optional: true,
              description: "True to enable inspection mode for shadow DOM.",
            },
            {
              name: "highlightConfig",
              $ref: "HighlightConfig",
              optional: true,
              description:
                "A descriptor for the highlight appearance of hovered-over nodes. May be omitted if <code>enabled == false</code>.",
            },
          ],
          description:
            "Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted. Backend then generates 'inspectNodeRequested' event upon element selection.",
        },
        {
          name: "highlightRect",
          parameters: [
            { name: "x", type: "integer", description: "X coordinate" },
            { name: "y", type: "integer", description: "Y coordinate" },
            { name: "width", type: "integer", description: "Rectangle width" },
            {
              name: "height",
              type: "integer",
              description: "Rectangle height",
            },
            {
              name: "color",
              $ref: "RGBA",
              optional: true,
              description: "The highlight fill color (default: transparent).",
            },
            {
              name: "outlineColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The highlight outline color (default: transparent).",
            },
          ],
          description:
            "Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.",
        },
        {
          name: "highlightQuad",
          parameters: [
            { name: "quad", $ref: "Quad", description: "Quad to highlight" },
            {
              name: "color",
              $ref: "RGBA",
              optional: true,
              description: "The highlight fill color (default: transparent).",
            },
            {
              name: "outlineColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The highlight outline color (default: transparent).",
            },
          ],
          description:
            "Highlights given quad. Coordinates are absolute with respect to the main frame viewport.",
          hidden: true,
        },
        {
          name: "highlightNode",
          parameters: [
            {
              name: "highlightConfig",
              $ref: "HighlightConfig",
              description: "A descriptor for the highlight appearance.",
            },
            {
              name: "nodeId",
              $ref: "NodeId",
              optional: true,
              description: "Identifier of the node to highlight.",
            },
            {
              name: "objectId",
              $ref: "Runtime.RemoteObjectId",
              optional: true,
              description:
                "JavaScript object id of the node to be highlighted.",
              hidden: true,
            },
          ],
          description:
            "Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or objectId must be specified.",
        },
        {
          name: "hideHighlight",
          description: "Hides DOM node highlight.",
        },
        {
          name: "highlightFrame",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Identifier of the frame to highlight.",
            },
            {
              name: "contentColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The content box highlight fill color (default: transparent).",
            },
            {
              name: "contentOutlineColor",
              $ref: "RGBA",
              optional: true,
              description:
                "The content box highlight outline color (default: transparent).",
            },
          ],
          description: "Highlights owner element of the frame with given id.",
          hidden: true,
        },
        {
          name: "pushNodeByPathToFrontend",
          parameters: [
            {
              name: "path",
              type: "string",
              description: "Path to node in the proprietary format.",
            },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node for given path.",
            },
          ],
          description:
            "Requests that the node is sent to the caller given its path. // FIXME, use XPath",
          hidden: true,
        },
        {
          name: "pushNodeByBackendIdToFrontend",
          parameters: [
            {
              name: "backendNodeId",
              $ref: "BackendNodeId",
              description: "The backend node id of the node.",
            },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "The pushed node's id.",
            },
          ],
          description:
            "Requests that the node is sent to the caller given its backend node id.",
          hidden: true,
        },
        {
          name: "releaseBackendNodeIds",
          parameters: [
            {
              name: "nodeGroup",
              type: "string",
              description: "The backend node ids group name.",
            },
          ],
          description:
            "Requests that group of <code>BackendNodeIds</code> is released.",
          hidden: true,
        },
        {
          name: "resolveNode",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to resolve.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "Symbolic group name that can be used to release multiple objects.",
            },
          ],
          returns: [
            {
              name: "object",
              $ref: "Runtime.RemoteObject",
              description: "JavaScript object wrapper for given node.",
            },
          ],
          description: "Resolves JavaScript node object for given node id.",
        },
        {
          name: "getAttributes",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to retrieve attibutes for.",
            },
          ],
          returns: [
            {
              name: "attributes",
              type: "array",
              items: { type: "string" },
              description:
                "An interleaved array of node attribute names and values.",
            },
          ],
          description: "Returns attributes for the specified node.",
        },
        {
          name: "moveTo",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to drop.",
            },
            {
              name: "targetNodeId",
              $ref: "NodeId",
              description: "Id of the element to drop into.",
            },
            {
              name: "insertBeforeNodeId",
              $ref: "NodeId",
              optional: true,
              description: "Drop node before given one.",
            },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "New id of the moved node.",
            },
          ],
          description:
            "Moves node into the new container, places it before the given anchor.",
        },
        {
          name: "undo",
          description: "Undoes the last performed action.",
          hidden: true,
        },
        {
          name: "redo",
          description: "Re-does the last undone action.",
          hidden: true,
        },
        {
          name: "markUndoableState",
          description: "Marks last undoable state.",
          hidden: true,
        },
        {
          name: "focus",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to focus.",
            },
          ],
          description: "Focuses the given element.",
          hidden: true,
        },
        {
          name: "setFileInputFiles",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the file input node to set files for.",
            },
            {
              name: "files",
              type: "array",
              items: { type: "string" },
              description: "Array of file paths to set.",
            },
          ],
          description: "Sets files for the given file input element.",
          hidden: true,
        },
        {
          name: "getBoxModel",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to get box model for.",
            },
          ],
          returns: [
            {
              name: "model",
              $ref: "BoxModel",
              description: "Box model for the node.",
            },
          ],
          description: "Returns boxes for the currently selected nodes.",
          hidden: true,
        },
        {
          name: "getNodeForLocation",
          parameters: [
            { name: "x", type: "integer", description: "X coordinate." },
            { name: "y", type: "integer", description: "Y coordinate." },
          ],
          returns: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node at given coordinates.",
            },
          ],
          description: "Returns node id at given location.",
          hidden: true,
        },
      ],
      events: [
        {
          name: "documentUpdated",
          description:
            "Fired when <code>Document</code> has been totally updated. Node ids are no longer valid.",
        },
        {
          name: "inspectNodeRequested",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node to inspect.",
            },
          ],
          description:
            "Fired when the node should be inspected. This happens after call to <code>setInspectModeEnabled</code>.",
          hidden: true,
        },
        {
          name: "setChildNodes",
          parameters: [
            {
              name: "parentId",
              $ref: "NodeId",
              description: "Parent node id to populate with children.",
            },
            {
              name: "nodes",
              type: "array",
              items: { $ref: "Node" },
              description: "Child nodes array.",
            },
          ],
          description:
            "Fired when backend wants to provide client with the missing DOM structure. This happens upon most of the calls requesting node ids.",
        },
        {
          name: "attributeModified",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node that has changed.",
            },
            { name: "name", type: "string", description: "Attribute name." },
            { name: "value", type: "string", description: "Attribute value." },
          ],
          description:
            "Fired when <code>Element</code>'s attribute is modified.",
        },
        {
          name: "attributeRemoved",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node that has changed.",
            },
            { name: "name", type: "string", description: "A ttribute name." },
          ],
          description:
            "Fired when <code>Element</code>'s attribute is removed.",
        },
        {
          name: "inlineStyleInvalidated",
          parameters: [
            {
              name: "nodeIds",
              type: "array",
              items: { $ref: "NodeId" },
              description:
                "Ids of the nodes for which the inline styles have been invalidated.",
            },
          ],
          description:
            "Fired when <code>Element</code>'s inline style is modified via a CSS property modification.",
          hidden: true,
        },
        {
          name: "characterDataModified",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node that has changed.",
            },
            {
              name: "characterData",
              type: "string",
              description: "New text value.",
            },
          ],
          description: "Mirrors <code>DOMCharacterDataModified</code> event.",
        },
        {
          name: "childNodeCountUpdated",
          parameters: [
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node that has changed.",
            },
            {
              name: "childNodeCount",
              type: "integer",
              description: "New node count.",
            },
          ],
          description:
            "Fired when <code>Container</code>'s child node count has changed.",
        },
        {
          name: "childNodeInserted",
          parameters: [
            {
              name: "parentNodeId",
              $ref: "NodeId",
              description: "Id of the node that has changed.",
            },
            {
              name: "previousNodeId",
              $ref: "NodeId",
              description: "If of the previous siblint.",
            },
            { name: "node", $ref: "Node", description: "Inserted node data." },
          ],
          description: "Mirrors <code>DOMNodeInserted</code> event.",
        },
        {
          name: "childNodeRemoved",
          parameters: [
            { name: "parentNodeId", $ref: "NodeId", description: "Parent id." },
            {
              name: "nodeId",
              $ref: "NodeId",
              description: "Id of the node that has been removed.",
            },
          ],
          description: "Mirrors <code>DOMNodeRemoved</code> event.",
        },
        {
          name: "shadowRootPushed",
          parameters: [
            { name: "hostId", $ref: "NodeId", description: "Host element id." },
            { name: "root", $ref: "Node", description: "Shadow root." },
          ],
          description: "Called when shadow root is pushed into the element.",
          hidden: true,
        },
        {
          name: "shadowRootPopped",
          parameters: [
            { name: "hostId", $ref: "NodeId", description: "Host element id." },
            { name: "rootId", $ref: "NodeId", description: "Shadow root id." },
          ],
          description: "Called when shadow root is popped from the element.",
          hidden: true,
        },
      ],
    },
    {
      domain: "CSS",
      hidden: true,
      description:
        "This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles) have an associated <code>id</code> used in subsequent operations on the related object. Each object type has a specific <code>id</code> structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the <code>get*ForNode()</code> calls (which accept a DOM node id). A client can also discover all the existing stylesheets with the <code>getAllStyleSheets()</code> method (or keeping track of the <code>styleSheetAdded</code>/<code>styleSheetRemoved</code> events) and subsequently load the required stylesheet contents using the <code>getStyleSheet[Text]()</code> methods.",
      types: [
        {
          id: "StyleSheetId",
          type: "string",
        },
        {
          id: "CSSStyleId",
          type: "object",
          properties: [
            {
              name: "styleSheetId",
              $ref: "StyleSheetId",
              description: "Enclosing stylesheet identifier.",
            },
            {
              name: "ordinal",
              type: "integer",
              description: "The style ordinal within the stylesheet.",
            },
          ],
          description: "This object identifies a CSS style in a unique way.",
        },
        {
          id: "StyleSheetOrigin",
          type: "string",
          enum: ["user", "user-agent", "inspector", "regular"],
          description:
            'Stylesheet type: "user" for user stylesheets, "user-agent" for user-agent stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via inspector" rules), "regular" for regular stylesheets.',
        },
        {
          id: "CSSRuleId",
          type: "object",
          properties: [
            {
              name: "styleSheetId",
              $ref: "StyleSheetId",
              description: "Enclosing stylesheet identifier.",
            },
            {
              name: "ordinal",
              type: "integer",
              description: "The rule ordinal within the stylesheet.",
            },
          ],
          description: "This object identifies a CSS rule in a unique way.",
        },
        {
          id: "PseudoIdMatches",
          type: "object",
          properties: [
            {
              name: "pseudoId",
              type: "integer",
              description:
                "Pseudo style identifier (see <code>enum PseudoId</code> in <code>ComputedStyleConstants.h</code>).",
            },
            {
              name: "matches",
              type: "array",
              items: { $ref: "RuleMatch" },
              description:
                "Matches of CSS rules applicable to the pseudo style.",
            },
          ],
          description: "CSS rule collection for a single pseudo style.",
        },
        {
          id: "InheritedStyleEntry",
          type: "object",
          properties: [
            {
              name: "inlineStyle",
              $ref: "CSSStyle",
              optional: true,
              description:
                "The ancestor node's inline style, if any, in the style inheritance chain.",
            },
            {
              name: "matchedCSSRules",
              type: "array",
              items: { $ref: "RuleMatch" },
              description:
                "Matches of CSS rules matching the ancestor node in the style inheritance chain.",
            },
          ],
          description: "CSS rule collection for a single pseudo style.",
        },
        {
          id: "RuleMatch",
          type: "object",
          properties: [
            {
              name: "rule",
              $ref: "CSSRule",
              description: "CSS rule in the match.",
            },
            {
              name: "matchingSelectors",
              type: "array",
              items: { type: "integer" },
              description:
                "Matching selector indices in the rule's selectorList selectors (0-based).",
            },
          ],
          description: "Match data for a CSS rule.",
        },
        {
          id: "SelectorList",
          type: "object",
          properties: [
            {
              name: "selectors",
              type: "array",
              items: { type: "string" },
              description: "Selectors in the list.",
            },
            {
              name: "text",
              type: "string",
              description: "Rule selector text.",
            },
            {
              name: "range",
              $ref: "SourceRange",
              optional: true,
              description:
                "Rule selector range in the underlying resource (if available).",
            },
          ],
          description: "Selector list data.",
        },
        {
          id: "CSSStyleAttribute",
          type: "object",
          properties: [
            {
              name: "name",
              type: "string",
              description: 'DOM attribute name (e.g. "width").',
            },
            {
              name: "style",
              $ref: "CSSStyle",
              description:
                "CSS style generated by the respective DOM attribute.",
            },
          ],
          description: "CSS style information for a DOM style attribute.",
        },
        {
          id: "CSSStyleSheetHeader",
          type: "object",
          properties: [
            {
              name: "styleSheetId",
              $ref: "StyleSheetId",
              description: "The stylesheet identifier.",
            },
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description: "Owner frame identifier.",
            },
            {
              name: "sourceURL",
              type: "string",
              description: "Stylesheet resource URL.",
            },
            {
              name: "sourceMapURL",
              type: "string",
              optional: true,
              description:
                "URL of source map associated with the stylesheet (if any).",
            },
            {
              name: "origin",
              $ref: "StyleSheetOrigin",
              description: "Stylesheet origin.",
            },
            { name: "title", type: "string", description: "Stylesheet title." },
            {
              name: "disabled",
              type: "boolean",
              description: "Denotes whether the stylesheet is disabled.",
            },
            {
              name: "hasSourceURL",
              type: "boolean",
              optional: true,
              description:
                "Whether the sourceURL field value comes from the sourceURL comment.",
            },
            {
              name: "isInline",
              type: "boolean",
              description:
                "Whether this stylesheet is created for STYLE tag by parser. This flag is not set for document.written STYLE tags.",
            },
            {
              name: "startLine",
              type: "number",
              description:
                "Line offset of the stylesheet within the resource (zero based).",
            },
            {
              name: "startColumn",
              type: "number",
              description:
                "Column offset of the stylesheet within the resource (zero based).",
            },
          ],
          description: "CSS stylesheet metainformation.",
        },
        {
          id: "CSSStyleSheetBody",
          type: "object",
          properties: [
            {
              name: "styleSheetId",
              $ref: "StyleSheetId",
              description: "The stylesheet identifier.",
            },
            {
              name: "rules",
              type: "array",
              items: { $ref: "CSSRule" },
              description: "Stylesheet resource URL.",
            },
            {
              name: "text",
              type: "string",
              optional: true,
              description: "Stylesheet resource contents (if available).",
            },
          ],
          description: "CSS stylesheet contents.",
        },
        {
          id: "CSSRule",
          type: "object",
          properties: [
            {
              name: "ruleId",
              $ref: "CSSRuleId",
              optional: true,
              description:
                "The CSS rule identifier (absent for user agent stylesheet and user-specified stylesheet rules).",
            },
            {
              name: "selectorList",
              $ref: "SelectorList",
              description: "Rule selector data.",
            },
            {
              name: "sourceURL",
              type: "string",
              optional: true,
              description:
                "Parent stylesheet resource URL (for regular rules).",
            },
            {
              name: "origin",
              $ref: "StyleSheetOrigin",
              description: "Parent stylesheet's origin.",
            },
            {
              name: "style",
              $ref: "CSSStyle",
              description: "Associated style declaration.",
            },
            {
              name: "media",
              type: "array",
              items: { $ref: "CSSMedia" },
              optional: true,
              description:
                "Media list array (for rules involving media queries). The array enumerates media queries starting with the innermost one, going outwards.",
            },
          ],
          description: "CSS rule representation.",
        },
        {
          id: "SourceRange",
          type: "object",
          properties: [
            {
              name: "startLine",
              type: "integer",
              description: "Start line of range.",
            },
            {
              name: "startColumn",
              type: "integer",
              description: "Start column of range (inclusive).",
            },
            {
              name: "endLine",
              type: "integer",
              description: "End line of range",
            },
            {
              name: "endColumn",
              type: "integer",
              description: "End column of range (exclusive).",
            },
          ],
          description:
            "Text range within a resource. All numbers are zero-based.",
        },
        {
          id: "ShorthandEntry",
          type: "object",
          properties: [
            { name: "name", type: "string", description: "Shorthand name." },
            { name: "value", type: "string", description: "Shorthand value." },
          ],
        },
        {
          id: "CSSPropertyInfo",
          type: "object",
          properties: [
            { name: "name", type: "string", description: "Property name." },
            {
              name: "longhands",
              type: "array",
              optional: true,
              items: { type: "string" },
              description: "Longhand property names.",
            },
          ],
        },
        {
          id: "CSSComputedStyleProperty",
          type: "object",
          properties: [
            {
              name: "name",
              type: "string",
              description: "Computed style property name.",
            },
            {
              name: "value",
              type: "string",
              description: "Computed style property value.",
            },
          ],
        },
        {
          id: "CSSStyle",
          type: "object",
          properties: [
            {
              name: "styleId",
              $ref: "CSSStyleId",
              optional: true,
              description:
                "The CSS style identifier (absent for attribute styles).",
            },
            {
              name: "cssProperties",
              type: "array",
              items: { $ref: "CSSProperty" },
              description: "CSS properties in the style.",
            },
            {
              name: "shorthandEntries",
              type: "array",
              items: { $ref: "ShorthandEntry" },
              description:
                "Computed values for all shorthands found in the style.",
            },
            {
              name: "cssText",
              type: "string",
              optional: true,
              description: "Style declaration text (if available).",
            },
            {
              name: "range",
              $ref: "SourceRange",
              optional: true,
              description:
                "Style declaration range in the enclosing stylesheet (if available).",
            },
            {
              name: "width",
              type: "string",
              optional: true,
              description:
                'The effective "width" property value from this style.',
            },
            {
              name: "height",
              type: "string",
              optional: true,
              description:
                'The effective "height" property value from this style.',
            },
          ],
          description: "CSS style representation.",
        },
        {
          id: "CSSProperty",
          type: "object",
          properties: [
            { name: "name", type: "string", description: "The property name." },
            {
              name: "value",
              type: "string",
              description: "The property value.",
            },
            {
              name: "priority",
              type: "string",
              optional: true,
              description: 'The property priority (implies "" if absent).',
            },
            {
              name: "implicit",
              type: "boolean",
              optional: true,
              description:
                "Whether the property is implicit (implies <code>false</code> if absent).",
            },
            {
              name: "text",
              type: "string",
              optional: true,
              description: "The full property text as specified in the style.",
            },
            {
              name: "parsedOk",
              type: "boolean",
              optional: true,
              description:
                "Whether the property is understood by the browser (implies <code>true</code> if absent).",
            },
            {
              name: "status",
              type: "string",
              enum: ["active", "inactive", "disabled", "style"],
              optional: true,
              description:
                'The property status: "active" if the property is effective in the style, "inactive" if the property is overridden by a same-named property in this style later on, "disabled" if the property is disabled by the user, "style" (implied if absent) if the property is reported by the browser rather than by the CSS source parser.',
            },
            {
              name: "range",
              $ref: "SourceRange",
              optional: true,
              description:
                "The entire property range in the enclosing style declaration (if available).",
            },
          ],
          description: "CSS property declaration data.",
        },
        {
          id: "CSSMedia",
          type: "object",
          properties: [
            { name: "text", type: "string", description: "Media query text." },
            {
              name: "source",
              type: "string",
              enum: ["mediaRule", "importRule", "linkedSheet", "inlineSheet"],
              description:
                'Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked stylesheet\'s LINK tag, "inlineSheet" if specified by a "media" attribute in an inline stylesheet\'s STYLE tag.',
            },
            {
              name: "sourceURL",
              type: "string",
              optional: true,
              description:
                "URL of the document containing the media query description.",
            },
            {
              name: "range",
              $ref: "SourceRange",
              optional: true,
              description:
                "The associated rule (@media or @import) header range in the enclosing stylesheet (if available).",
            },
            {
              name: "parentStyleSheetId",
              $ref: "StyleSheetId",
              optional: true,
              description:
                "Identifier of the stylesheet containing this object (if exists).",
            },
          ],
          description: "CSS media query descriptor.",
        },
        {
          id: "SelectorProfileEntry",
          type: "object",
          properties: [
            {
              name: "selector",
              type: "string",
              description: "CSS selector of the corresponding rule.",
            },
            {
              name: "url",
              type: "string",
              description:
                "URL of the resource containing the corresponding rule.",
            },
            {
              name: "lineNumber",
              type: "integer",
              description:
                "Selector line number in the resource for the corresponding rule.",
            },
            {
              name: "time",
              type: "number",
              description:
                "Total time this rule handling contributed to the browser running time during profiling (in milliseconds).",
            },
            {
              name: "hitCount",
              type: "integer",
              description:
                "Number of times this rule was considered a candidate for matching against DOM elements.",
            },
            {
              name: "matchCount",
              type: "integer",
              description:
                "Number of times this rule actually matched a DOM element.",
            },
          ],
          description: "CSS selector profile entry.",
        },
        {
          id: "SelectorProfile",
          type: "object",
          properties: [
            {
              name: "totalTime",
              type: "number",
              description:
                "Total processing time for all selectors in the profile (in milliseconds).",
            },
            {
              name: "data",
              type: "array",
              items: { $ref: "SelectorProfileEntry" },
              description: "CSS selector profile entries.",
            },
          ],
        },
        {
          id: "Region",
          type: "object",
          properties: [
            {
              name: "regionOverset",
              type: "string",
              enum: ["overset", "fit", "empty"],
              description: 'The "overset" attribute of a Named Flow.',
            },
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              description: "The corresponding DOM node id.",
            },
          ],
          description:
            "This object represents a region that flows from a Named Flow.",
          hidden: true,
        },
        {
          id: "NamedFlow",
          type: "object",
          properties: [
            {
              name: "documentNodeId",
              $ref: "DOM.NodeId",
              description: "The document node id.",
            },
            {
              name: "name",
              type: "string",
              description: "Named Flow identifier.",
            },
            {
              name: "overset",
              type: "boolean",
              description: 'The "overset" attribute of a Named Flow.',
            },
            {
              name: "content",
              type: "array",
              items: { $ref: "DOM.NodeId" },
              description: "An array of nodes that flow into the Named Flow.",
            },
            {
              name: "regions",
              type: "array",
              items: { $ref: "Region" },
              description:
                "An array of regions associated with the Named Flow.",
            },
          ],
          description: "This object represents a Named Flow.",
          hidden: true,
        },
        {
          id: "PlatformFontUsage",
          type: "object",
          properties: [
            {
              name: "familyName",
              type: "string",
              description: "Font's family name reported by platform.",
            },
            {
              name: "glyphCount",
              type: "number",
              description:
                "Amount of glyphs that were rendered with this font.",
            },
          ],
          description:
            "Information about amount of glyphs that were rendered with given font.",
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been enabled until the result of this command is received.",
        },
        {
          name: "disable",
          description: "Disables the CSS agent for the given page.",
        },
        {
          name: "getMatchedStylesForNode",
          parameters: [
            { name: "nodeId", $ref: "DOM.NodeId" },
            {
              name: "includePseudo",
              type: "boolean",
              optional: true,
              description: "Whether to include pseudo styles (default: true).",
            },
            {
              name: "includeInherited",
              type: "boolean",
              optional: true,
              description:
                "Whether to include inherited styles (default: true).",
            },
          ],
          returns: [
            {
              name: "matchedCSSRules",
              type: "array",
              items: { $ref: "RuleMatch" },
              optional: true,
              description:
                "CSS rules matching this node, from all applicable stylesheets.",
            },
            {
              name: "pseudoElements",
              type: "array",
              items: { $ref: "PseudoIdMatches" },
              optional: true,
              description: "Pseudo style matches for this node.",
            },
            {
              name: "inherited",
              type: "array",
              items: { $ref: "InheritedStyleEntry" },
              optional: true,
              description:
                "A chain of inherited styles (from the immediate node parent up to the DOM tree root).",
            },
          ],
          description:
            "Returns requested styles for a DOM node identified by <code>nodeId</code>.",
        },
        {
          name: "getInlineStylesForNode",
          parameters: [{ name: "nodeId", $ref: "DOM.NodeId" }],
          returns: [
            {
              name: "inlineStyle",
              $ref: "CSSStyle",
              optional: true,
              description: "Inline style for the specified DOM node.",
            },
            {
              name: "attributesStyle",
              $ref: "CSSStyle",
              optional: true,
              description:
                'Attribute-defined element style (e.g. resulting from "width=20 height=100%").',
            },
          ],
          description:
            'Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM attributes) for a DOM node identified by <code>nodeId</code>.',
        },
        {
          name: "getComputedStyleForNode",
          parameters: [{ name: "nodeId", $ref: "DOM.NodeId" }],
          returns: [
            {
              name: "computedStyle",
              type: "array",
              items: { $ref: "CSSComputedStyleProperty" },
              description: "Computed style for the specified DOM node.",
            },
          ],
          description:
            "Returns the computed style for a DOM node identified by <code>nodeId</code>.",
        },
        {
          name: "getPlatformFontsForNode",
          parameters: [{ name: "nodeId", $ref: "DOM.NodeId" }],
          returns: [
            {
              name: "cssFamilyName",
              type: "string",
              description:
                "Font family name which is determined by computed style.",
            },
            {
              name: "fonts",
              type: "array",
              items: { $ref: "PlatformFontUsage" },
              description: "Usage statistics for every employed platform font.",
            },
          ],
          description:
            "Requests information about platform fonts which we used to render child TextNodes in the given node.",
          hidden: true,
        },
        {
          name: "getAllStyleSheets",
          returns: [
            {
              name: "headers",
              type: "array",
              items: { $ref: "CSSStyleSheetHeader" },
              description: "Descriptor entries for all available stylesheets.",
            },
          ],
          description: "Returns metainfo entries for all known stylesheets.",
        },
        {
          name: "getStyleSheet",
          parameters: [{ name: "styleSheetId", $ref: "StyleSheetId" }],
          returns: [
            {
              name: "styleSheet",
              $ref: "CSSStyleSheetBody",
              description:
                "Stylesheet contents for the specified <code>styleSheetId</code>.",
            },
          ],
          description:
            "Returns stylesheet data for the specified <code>styleSheetId</code>.",
        },
        {
          name: "getStyleSheetText",
          parameters: [{ name: "styleSheetId", $ref: "StyleSheetId" }],
          returns: [
            {
              name: "text",
              type: "string",
              description: "The stylesheet text.",
            },
          ],
          description:
            "Returns the current textual content and the URL for a stylesheet.",
        },
        {
          name: "setStyleSheetText",
          parameters: [
            { name: "styleSheetId", $ref: "StyleSheetId" },
            { name: "text", type: "string" },
          ],
          description:
            "Sets the new stylesheet text, thereby invalidating all existing <code>CSSStyleId</code>'s and <code>CSSRuleId</code>'s contained by this stylesheet.",
        },
        {
          name: "setStyleText",
          parameters: [
            { name: "styleId", $ref: "CSSStyleId" },
            { name: "text", type: "string" },
          ],
          returns: [
            {
              name: "style",
              $ref: "CSSStyle",
              description: "The resulting style after the text modification.",
            },
          ],
          description: "Updates the CSSStyleDeclaration text.",
        },
        {
          name: "setPropertyText",
          parameters: [
            { name: "styleId", $ref: "CSSStyleId" },
            { name: "propertyIndex", type: "integer" },
            { name: "text", type: "string" },
            { name: "overwrite", type: "boolean" },
          ],
          returns: [
            {
              name: "style",
              $ref: "CSSStyle",
              description:
                "The resulting style after the property text modification.",
            },
          ],
          description:
            "Sets the new <code>text</code> for a property in the respective style, at offset <code>propertyIndex</code>. If <code>overwrite</code> is <code>true</code>, a property at the given offset is overwritten, otherwise inserted. <code>text</code> entirely replaces the property <code>name: value</code>.",
        },
        {
          name: "toggleProperty",
          parameters: [
            { name: "styleId", $ref: "CSSStyleId" },
            { name: "propertyIndex", type: "integer" },
            { name: "disable", type: "boolean" },
          ],
          returns: [
            {
              name: "style",
              $ref: "CSSStyle",
              description: "The resulting style after the property toggling.",
            },
          ],
          description:
            "Toggles the property in the respective style, at offset <code>propertyIndex</code>. The <code>disable</code> parameter denotes whether the property should be disabled (i.e. removed from the style declaration). If <code>disable == false</code>, the property gets put back into its original place in the style declaration.",
        },
        {
          name: "setRuleSelector",
          parameters: [
            { name: "ruleId", $ref: "CSSRuleId" },
            { name: "selector", type: "string" },
          ],
          returns: [
            {
              name: "rule",
              $ref: "CSSRule",
              description:
                "The resulting rule after the selector modification.",
            },
          ],
          description: "Modifies the rule selector.",
        },
        {
          name: "addRule",
          parameters: [
            { name: "contextNodeId", $ref: "DOM.NodeId" },
            { name: "selector", type: "string" },
          ],
          returns: [
            {
              name: "rule",
              $ref: "CSSRule",
              description: "The newly created rule.",
            },
          ],
          description:
            'Creates a new empty rule with the given <code>selector</code> in a special "inspector" stylesheet in the owner document of the context node.',
        },
        {
          name: "getSupportedCSSProperties",
          returns: [
            {
              name: "cssProperties",
              type: "array",
              items: { $ref: "CSSPropertyInfo" },
              description: "Supported property metainfo.",
            },
          ],
          description: "Returns all supported CSS property names.",
        },
        {
          name: "forcePseudoState",
          parameters: [
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              description:
                "The element id for which to force the pseudo state.",
            },
            {
              name: "forcedPseudoClasses",
              type: "array",
              items: {
                type: "string",
                enum: ["active", "focus", "hover", "visited"],
              },
              description:
                "Element pseudo classes to force when computing the element's style.",
            },
          ],
          description:
            "Ensures that the given node will have specified pseudo-classes whenever its style is computed by the browser.",
        },
        {
          name: "getNamedFlowCollection",
          parameters: [
            {
              name: "documentNodeId",
              $ref: "DOM.NodeId",
              description:
                "The document node id for which to get the Named Flow Collection.",
            },
          ],
          returns: [
            {
              name: "namedFlows",
              type: "array",
              items: { $ref: "NamedFlow" },
              description:
                "An array containing the Named Flows in the document.",
            },
          ],
          description: "Returns the Named Flows from the document.",
          hidden: true,
        },
      ],
      events: [
        {
          name: "mediaQueryResultChanged",
          description:
            "Fires whenever a MediaQuery result changes (for example, after a browser window has been resized.) The current implementation considers only viewport-dependent media features.",
        },
        {
          name: "styleSheetChanged",
          parameters: [{ name: "styleSheetId", $ref: "StyleSheetId" }],
          description:
            "Fired whenever a stylesheet is changed as a result of the client operation.",
        },
        {
          name: "styleSheetAdded",
          parameters: [
            {
              name: "header",
              $ref: "CSSStyleSheetHeader",
              description: "Added stylesheet metainfo.",
            },
          ],
          description: "Fired whenever an active document stylesheet is added.",
        },
        {
          name: "styleSheetRemoved",
          parameters: [
            {
              name: "styleSheetId",
              $ref: "StyleSheetId",
              description: "Identifier of the removed stylesheet.",
            },
          ],
          description:
            "Fired whenever an active document stylesheet is removed.",
        },
        {
          name: "namedFlowCreated",
          parameters: [
            {
              name: "namedFlow",
              $ref: "NamedFlow",
              description: "The new Named Flow.",
            },
          ],
          description: "Fires when a Named Flow is created.",
          hidden: true,
        },
        {
          name: "namedFlowRemoved",
          parameters: [
            {
              name: "documentNodeId",
              $ref: "DOM.NodeId",
              description: "The document node id.",
            },
            {
              name: "flowName",
              type: "string",
              description: "Identifier of the removed Named Flow.",
            },
          ],
          description:
            "Fires when a Named Flow is removed: has no associated content nodes and regions.",
          hidden: true,
        },
        {
          name: "regionLayoutUpdated",
          parameters: [
            {
              name: "namedFlow",
              $ref: "NamedFlow",
              description: "The Named Flow whose layout may have changed.",
            },
          ],
          description: "Fires when a Named Flow's layout may have changed.",
          hidden: true,
        },
        {
          name: "regionOversetChanged",
          parameters: [
            {
              name: "namedFlow",
              $ref: "NamedFlow",
              description:
                "The Named Flow containing the regions whose regionOverset values changed.",
            },
          ],
          description:
            "Fires if any of the regionOverset values changed in a Named Flow's region chain.",
          hidden: true,
        },
      ],
    },
    {
      domain: "Debugger",
      description:
        "Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc.",
      types: [
        {
          id: "BreakpointId",
          type: "string",
          description: "Breakpoint identifier.",
        },
        {
          id: "ScriptId",
          type: "string",
          description: "Unique script identifier.",
        },
        {
          id: "CallFrameId",
          type: "string",
          description: "Call frame identifier.",
        },
        {
          id: "Location",
          type: "object",
          properties: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description:
                "Script identifier as reported in the <code>Debugger.scriptParsed</code>.",
            },
            {
              name: "lineNumber",
              type: "integer",
              description: "Line number in the script (0-based).",
            },
            {
              name: "columnNumber",
              type: "integer",
              optional: true,
              description: "Column number in the script (0-based).",
            },
          ],
          description: "Location in the source code.",
        },
        {
          id: "FunctionDetails",
          hidden: true,
          type: "object",
          properties: [
            {
              name: "location",
              $ref: "Location",
              description: "Location of the function.",
            },
            {
              name: "name",
              type: "string",
              optional: true,
              description:
                "Name of the function. Not present for anonymous functions.",
            },
            {
              name: "displayName",
              type: "string",
              optional: true,
              description:
                "Display name of the function(specified in 'displayName' property on the function object).",
            },
            {
              name: "inferredName",
              type: "string",
              optional: true,
              description:
                "Name of the function inferred from its initial assignment.",
            },
            {
              name: "scopeChain",
              type: "array",
              optional: true,
              items: { $ref: "Scope" },
              description: "Scope chain for this closure.",
            },
          ],
          description: "Information about the function.",
        },
        {
          id: "CallFrame",
          type: "object",
          properties: [
            {
              name: "callFrameId",
              $ref: "CallFrameId",
              description:
                "Call frame identifier. This identifier is only valid while the virtual machine is paused.",
            },
            {
              name: "functionName",
              type: "string",
              description:
                "Name of the JavaScript function called on this call frame.",
            },
            {
              name: "location",
              $ref: "Location",
              description: "Location in the source code.",
            },
            {
              name: "scopeChain",
              type: "array",
              items: { $ref: "Scope" },
              description: "Scope chain for this call frame.",
            },
            {
              name: "this",
              $ref: "Runtime.RemoteObject",
              description: "<code>this</code> object for this call frame.",
            },
          ],
          description:
            "JavaScript call frame. Array of call frames form the call stack.",
        },
        {
          id: "Scope",
          type: "object",
          properties: [
            {
              name: "type",
              type: "string",
              enum: ["global", "local", "with", "closure", "catch"],
              description: "Scope type.",
            },
            {
              name: "object",
              $ref: "Runtime.RemoteObject",
              description:
                "Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties.",
            },
          ],
          description: "Scope description.",
        },
        {
          id: "SetScriptSourceError",
          type: "object",
          properties: [
            {
              name: "compileError",
              optional: true,
              type: "object",
              properties: [
                {
                  name: "message",
                  type: "string",
                  description: "Compiler error message",
                },
                {
                  name: "lineNumber",
                  type: "integer",
                  description: "Compile error line number (1-based)",
                },
                {
                  name: "columnNumber",
                  type: "integer",
                  description: "Compile error column number (1-based)",
                },
              ],
            },
          ],
          description:
            "Error data for setScriptSource command. compileError is a case type for uncompilable script source error.",
          hidden: true,
        },
      ],
      commands: [
        {
          name: "enable",
          description:
            "Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received.",
        },
        {
          name: "disable",
          description: "Disables debugger for given page.",
        },
        {
          name: "setBreakpointsActive",
          parameters: [
            {
              name: "active",
              type: "boolean",
              description: "New value for breakpoints active state.",
            },
          ],
          description: "Activates / deactivates all breakpoints on the page.",
        },
        {
          name: "setSkipAllPauses",
          hidden: true,
          parameters: [
            {
              name: "skipped",
              type: "boolean",
              description: "New value for skip pauses state.",
            },
            {
              name: "untilReload",
              type: "boolean",
              optional: true,
              description: "Whether page reload should set skipped to false.",
            },
          ],
          description:
            "Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc).",
        },
        {
          name: "setBreakpointByUrl",
          parameters: [
            {
              name: "lineNumber",
              type: "integer",
              description: "Line number to set breakpoint at.",
            },
            {
              name: "url",
              type: "string",
              optional: true,
              description: "URL of the resources to set breakpoint on.",
            },
            {
              name: "urlRegex",
              type: "string",
              optional: true,
              description:
                "Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified.",
            },
            {
              name: "columnNumber",
              type: "integer",
              optional: true,
              description: "Offset in the line to set breakpoint at.",
            },
            {
              name: "condition",
              type: "string",
              optional: true,
              description:
                "Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.",
            },
            {
              name: "isAntibreakpoint",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "Creates pseudo-breakpoint that prevents debugger from pausing on exception at this location.",
            },
          ],
          returns: [
            {
              name: "breakpointId",
              $ref: "BreakpointId",
              description:
                "Id of the created breakpoint for further reference.",
            },
            {
              name: "locations",
              type: "array",
              items: { $ref: "Location" },
              description:
                "List of the locations this breakpoint resolved into upon addition.",
            },
          ],
          description:
            "Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads.",
        },
        {
          name: "setBreakpoint",
          parameters: [
            {
              name: "location",
              $ref: "Location",
              description: "Location to set breakpoint in.",
            },
            {
              name: "condition",
              type: "string",
              optional: true,
              description:
                "Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true.",
            },
          ],
          returns: [
            {
              name: "breakpointId",
              $ref: "BreakpointId",
              description:
                "Id of the created breakpoint for further reference.",
            },
            {
              name: "actualLocation",
              $ref: "Location",
              description: "Location this breakpoint resolved into.",
            },
          ],
          description: "Sets JavaScript breakpoint at a given location.",
        },
        {
          name: "removeBreakpoint",
          parameters: [{ name: "breakpointId", $ref: "BreakpointId" }],
          description: "Removes JavaScript breakpoint.",
        },
        {
          name: "continueToLocation",
          parameters: [
            {
              name: "location",
              $ref: "Location",
              description: "Location to continue to.",
            },
            {
              name: "interstatementLocation",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "Allows breakpoints at the intemediate positions inside statements.",
            },
          ],
          description:
            "Continues execution until specific location is reached.",
        },
        {
          name: "stepOver",
          description: "Steps over the statement.",
        },
        {
          name: "stepInto",
          description: "Steps into the function call.",
        },
        {
          name: "stepOut",
          description: "Steps out of the function call.",
        },
        {
          name: "pause",
          description: "Stops on the next JavaScript statement.",
        },
        {
          name: "resume",
          description: "Resumes JavaScript execution.",
        },
        {
          name: "searchInContent",
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Id of the script to search in.",
            },
            {
              name: "query",
              type: "string",
              description: "String to search for.",
            },
            {
              name: "caseSensitive",
              type: "boolean",
              optional: true,
              description: "If true, search is case sensitive.",
            },
            {
              name: "isRegex",
              type: "boolean",
              optional: true,
              description: "If true, treats string parameter as regex.",
            },
          ],
          returns: [
            {
              name: "result",
              type: "array",
              items: { $ref: "Page.SearchMatch" },
              description: "List of search matches.",
            },
          ],
          description: "Searches for given string in script content.",
        },
        {
          name: "canSetScriptSource",
          returns: [
            {
              name: "result",
              type: "boolean",
              description: "True if <code>setScriptSource</code> is supported.",
            },
          ],
          description: "Always returns true.",
        },
        {
          name: "setScriptSource",
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Id of the script to edit.",
            },
            {
              name: "scriptSource",
              type: "string",
              description: "New content of the script.",
            },
            {
              name: "preview",
              type: "boolean",
              optional: true,
              description:
                " If true the change will not actually be applied. Preview mode may be used to get result description without actually modifying the code.",
              hidden: true,
            },
          ],
          returns: [
            {
              name: "callFrames",
              type: "array",
              optional: true,
              items: { $ref: "CallFrame" },
              description:
                "New stack trace in case editing has happened while VM was stopped.",
            },
            {
              name: "result",
              type: "object",
              optional: true,
              description: "VM-specific description of the changes applied.",
              hidden: true,
            },
          ],
          error: {
            $ref: "SetScriptSourceError",
          },
          description: "Edits JavaScript source live.",
        },
        {
          name: "restartFrame",
          parameters: [
            {
              name: "callFrameId",
              $ref: "CallFrameId",
              description: "Call frame identifier to evaluate on.",
            },
          ],
          returns: [
            {
              name: "callFrames",
              type: "array",
              items: { $ref: "CallFrame" },
              description: "New stack trace.",
            },
            {
              name: "result",
              type: "object",
              description: "VM-specific description.",
              hidden: true,
            },
          ],
          hidden: true,
          description: "Restarts particular call frame from the beginning.",
        },
        {
          name: "getScriptSource",
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Id of the script to get source for.",
            },
          ],
          returns: [
            {
              name: "scriptSource",
              type: "string",
              description: "Script source.",
            },
          ],
          description: "Returns source for the script with given id.",
        },
        {
          name: "getFunctionDetails",
          hidden: true,
          parameters: [
            {
              name: "functionId",
              $ref: "Runtime.RemoteObjectId",
              description: "Id of the function to get location for.",
            },
          ],
          returns: [
            {
              name: "details",
              $ref: "FunctionDetails",
              description: "Information about the function.",
            },
          ],
          description: "Returns detailed informtation on given function.",
        },
        {
          name: "setPauseOnExceptions",
          parameters: [
            {
              name: "state",
              type: "string",
              enum: ["none", "uncaught", "all"],
              description: "Pause on exceptions mode.",
            },
          ],
          description:
            "Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>.",
        },
        {
          name: "evaluateOnCallFrame",
          parameters: [
            {
              name: "callFrameId",
              $ref: "CallFrameId",
              description: "Call frame identifier to evaluate on.",
            },
            {
              name: "expression",
              type: "string",
              description: "Expression to evaluate.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>).",
            },
            {
              name: "includeCommandLineAPI",
              type: "boolean",
              optional: true,
              description:
                "Specifies whether command line API should be available to the evaluated expression, defaults to false.",
              hidden: true,
            },
            {
              name: "doNotPauseOnExceptionsAndMuteConsole",
              type: "boolean",
              optional: true,
              description:
                "Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state.",
              hidden: true,
            },
            {
              name: "returnByValue",
              type: "boolean",
              optional: true,
              description:
                "Whether the result is expected to be a JSON object that should be sent by value.",
            },
            {
              name: "generatePreview",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "Whether preview should be generated for the result.",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "Runtime.RemoteObject",
              description: "Object wrapper for the evaluation result.",
            },
            {
              name: "wasThrown",
              type: "boolean",
              optional: true,
              description:
                "True if the result was thrown during the evaluation.",
            },
          ],
          description: "Evaluates expression on a given call frame.",
        },
        {
          name: "compileScript",
          hidden: true,
          parameters: [
            {
              name: "expression",
              type: "string",
              description: "Expression to compile.",
            },
            {
              name: "sourceURL",
              type: "string",
              description: "Source url to be set for the script.",
            },
          ],
          returns: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              optional: true,
              description: "Id of the script.",
            },
            {
              name: "syntaxErrorMessage",
              type: "string",
              optional: true,
              description: "Syntax error message if compilation failed.",
            },
          ],
          description: "Compiles expression.",
        },
        {
          name: "runScript",
          hidden: true,
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Id of the script to run.",
            },
            {
              name: "contextId",
              $ref: "Runtime.ExecutionContextId",
              optional: true,
              description:
                "Specifies in which isolated context to perform script run. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "Symbolic group name that can be used to release multiple objects.",
            },
            {
              name: "doNotPauseOnExceptionsAndMuteConsole",
              type: "boolean",
              optional: true,
              description:
                "Specifies whether script run should stop on exceptions and mute console. Overrides setPauseOnException state.",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "Runtime.RemoteObject",
              description: "Run result.",
            },
            {
              name: "wasThrown",
              type: "boolean",
              optional: true,
              description:
                "True if the result was thrown during the script run.",
            },
          ],
          description: "Runs script with given id in a given context.",
        },
        {
          name: "setOverlayMessage",
          parameters: [
            {
              name: "message",
              type: "string",
              optional: true,
              description:
                "Overlay message to display when paused in debugger.",
            },
          ],
          hidden: true,
          description: "Sets overlay message.",
        },
        {
          name: "setVariableValue",
          parameters: [
            {
              name: "scopeNumber",
              type: "integer",
              description:
                "0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually.",
            },
            {
              name: "variableName",
              type: "string",
              description: "Variable name.",
            },
            {
              name: "newValue",
              $ref: "Runtime.CallArgument",
              description: "New variable value.",
            },
            {
              name: "callFrameId",
              $ref: "CallFrameId",
              optional: true,
              description: "Id of callframe that holds variable.",
            },
            {
              name: "functionObjectId",
              $ref: "Runtime.RemoteObjectId",
              optional: true,
              description:
                "Object id of closure (function) that holds variable.",
            },
          ],
          hidden: true,
          description:
            "Changes value of variable in a callframe or a closure. Either callframe or function must be specified. Object-based scopes are not supported and must be mutated manually.",
        },
        {
          name: "getStepInPositions",
          parameters: [
            {
              name: "callFrameId",
              $ref: "CallFrameId",
              description:
                "Id of a call frame where the current statement should be analized",
            },
          ],
          returns: [
            {
              name: "stepInPositions",
              type: "array",
              items: { $ref: "Location" },
              optional: true,
              description: "experimental",
            },
          ],
          hidden: true,
          description:
            "Lists all positions where step-in is possible for a current statement in a specified call frame",
        },
        {
          name: "getBacktrace",
          returns: [
            {
              name: "callFrames",
              type: "array",
              items: { $ref: "CallFrame" },
              description: "Call stack the virtual machine stopped on.",
            },
          ],
          hidden: true,
          description:
            "Returns call stack including variables changed since VM was paused. VM must be paused.",
        },
        {
          name: "skipStackFrames",
          parameters: [
            {
              name: "script",
              optional: true,
              type: "string",
              description:
                "Regular expression defining the scripts to ignore while stepping.",
            },
          ],
          hidden: true,
          description:
            "Makes backend skip steps in the sources with names matching given pattern. VM will try leave blacklisted scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful.",
        },
      ],
      events: [
        {
          name: "globalObjectCleared",
          description:
            "Called when global has been cleared and debugger client should reset its state. Happens upon navigation or reload.",
        },
        {
          name: "scriptParsed",
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Identifier of the script parsed.",
            },
            {
              name: "url",
              type: "string",
              description: "URL or name of the script parsed (if any).",
            },
            {
              name: "startLine",
              type: "integer",
              description:
                "Line offset of the script within the resource with given URL (for script tags).",
            },
            {
              name: "startColumn",
              type: "integer",
              description:
                "Column offset of the script within the resource with given URL.",
            },
            {
              name: "endLine",
              type: "integer",
              description: "Last line of the script.",
            },
            {
              name: "endColumn",
              type: "integer",
              description: "Length of the last line of the script.",
            },
            {
              name: "isContentScript",
              type: "boolean",
              optional: true,
              description:
                "Determines whether this script is a user extension script.",
            },
            {
              name: "sourceMapURL",
              type: "string",
              optional: true,
              description: "URL of source map associated with script (if any).",
            },
            {
              name: "hasSourceURL",
              type: "boolean",
              optional: true,
              description: "True, if this script has sourceURL.",
              hidden: true,
            },
          ],
          description:
            "Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger.",
        },
        {
          name: "scriptFailedToParse",
          parameters: [
            {
              name: "scriptId",
              $ref: "ScriptId",
              description: "Identifier of the script parsed.",
            },
            {
              name: "url",
              type: "string",
              description: "URL or name of the script parsed (if any).",
            },
            {
              name: "startLine",
              type: "integer",
              description:
                "Line offset of the script within the resource with given URL (for script tags).",
            },
            {
              name: "startColumn",
              type: "integer",
              description:
                "Column offset of the script within the resource with given URL.",
            },
            {
              name: "endLine",
              type: "integer",
              description: "Last line of the script.",
            },
            {
              name: "endColumn",
              type: "integer",
              description: "Length of the last line of the script.",
            },
            {
              name: "isContentScript",
              type: "boolean",
              optional: true,
              description:
                "Determines whether this script is a user extension script.",
            },
            {
              name: "sourceMapURL",
              type: "string",
              optional: true,
              description: "URL of source map associated with script (if any).",
            },
            {
              name: "hasSourceURL",
              type: "boolean",
              optional: true,
              description: "True, if this script has sourceURL.",
              hidden: true,
            },
          ],
          description: "Fired when virtual machine fails to parse the script.",
        },
        {
          name: "breakpointResolved",
          parameters: [
            {
              name: "breakpointId",
              $ref: "BreakpointId",
              description: "Breakpoint unique identifier.",
            },
            {
              name: "location",
              $ref: "Location",
              description: "Actual breakpoint location.",
            },
          ],
          description:
            "Fired when breakpoint is resolved to an actual script and location.",
        },
        {
          name: "paused",
          parameters: [
            {
              name: "callFrames",
              type: "array",
              items: { $ref: "CallFrame" },
              description: "Call stack the virtual machine stopped on.",
            },
            {
              name: "reason",
              type: "string",
              enum: [
                "XHR",
                "DOM",
                "EventListener",
                "exception",
                "assert",
                "CSPViolation",
                "debugCommand",
                "other",
              ],
              description: "Pause reason.",
            },
            {
              name: "data",
              type: "object",
              optional: true,
              description:
                "Object containing break-specific auxiliary properties.",
            },
            {
              name: "hitBreakpoints",
              type: "array",
              optional: true,
              items: { type: "string" },
              description: "Hit breakpoints IDs",
              hidden: true,
            },
          ],
          description:
            "Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.",
        },
        {
          name: "resumed",
          description: "Fired when the virtual machine resumed execution.",
        },
      ],
    },
    {
      domain: "DOMDebugger",
      description:
        "DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set.",
      types: [
        {
          id: "DOMBreakpointType",
          type: "string",
          enum: ["subtree-modified", "attribute-modified", "node-removed"],
          description: "DOM breakpoint type.",
        },
      ],
      commands: [
        {
          name: "setDOMBreakpoint",
          parameters: [
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              description: "Identifier of the node to set breakpoint on.",
            },
            {
              name: "type",
              $ref: "DOMBreakpointType",
              description: "Type of the operation to stop upon.",
            },
          ],
          description: "Sets breakpoint on particular operation with DOM.",
        },
        {
          name: "removeDOMBreakpoint",
          parameters: [
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              description: "Identifier of the node to remove breakpoint from.",
            },
            {
              name: "type",
              $ref: "DOMBreakpointType",
              description: "Type of the breakpoint to remove.",
            },
          ],
          description:
            "Removes DOM breakpoint that was set using <code>setDOMBreakpoint</code>.",
        },
        {
          name: "setEventListenerBreakpoint",
          parameters: [
            {
              name: "eventName",
              type: "string",
              description: "DOM Event name to stop on (any DOM event will do).",
            },
          ],
          description: "Sets breakpoint on particular DOM event.",
        },
        {
          name: "removeEventListenerBreakpoint",
          parameters: [
            { name: "eventName", type: "string", description: "Event name." },
          ],
          description: "Removes breakpoint on particular DOM event.",
        },
        {
          name: "setInstrumentationBreakpoint",
          parameters: [
            {
              name: "eventName",
              type: "string",
              description: "Instrumentation name to stop on.",
            },
          ],
          description: "Sets breakpoint on particular native event.",
          hidden: true,
        },
        {
          name: "removeInstrumentationBreakpoint",
          parameters: [
            {
              name: "eventName",
              type: "string",
              description: "Instrumentation name to stop on.",
            },
          ],
          description: "Removes breakpoint on particular native event.",
          hidden: true,
        },
        {
          name: "setXHRBreakpoint",
          parameters: [
            {
              name: "url",
              type: "string",
              description:
                "Resource URL substring. All XHRs having this substring in the URL will get stopped upon.",
            },
          ],
          description: "Sets breakpoint on XMLHttpRequest.",
        },
        {
          name: "removeXHRBreakpoint",
          parameters: [
            {
              name: "url",
              type: "string",
              description: "Resource URL substring.",
            },
          ],
          description: "Removes breakpoint from XMLHttpRequest.",
        },
      ],
    },
    {
      domain: "Profiler",
      hidden: true,
      types: [
        {
          id: "ProfileHeader",
          type: "object",
          description: "Profile header.",
          properties: [
            { name: "title", type: "string", description: "Profile title." },
            {
              name: "uid",
              type: "integer",
              description: "Unique identifier of the profile.",
            },
          ],
        },
        {
          id: "CPUProfileNode",
          type: "object",
          description:
            "CPU Profile node. Holds callsite information, execution statistics and child nodes.",
          properties: [
            {
              name: "functionName",
              type: "string",
              description: "Function name.",
            },
            {
              name: "scriptId",
              $ref: "Debugger.ScriptId",
              description: "Script identifier.",
            },
            { name: "url", type: "string", description: "URL." },
            {
              name: "lineNumber",
              type: "integer",
              description: "Line number.",
            },
            {
              name: "hitCount",
              type: "integer",
              description:
                "Number of samples where this node was on top of the call stack.",
            },
            { name: "callUID", type: "number", description: "Call UID." },
            {
              name: "children",
              type: "array",
              items: { $ref: "CPUProfileNode" },
              description: "Child nodes.",
            },
            {
              name: "deoptReason",
              type: "string",
              description:
                "The reason of being not optimized. The function may be deoptimized or marked as don't optimize.",
            },
            {
              name: "id",
              optional: true,
              type: "integer",
              description: "Unique id of the node.",
            },
          ],
        },
        {
          id: "CPUProfile",
          type: "object",
          description: "Profile.",
          properties: [
            { name: "head", $ref: "CPUProfileNode" },
            {
              name: "startTime",
              type: "number",
              description: "Profiling start time in seconds.",
            },
            {
              name: "endTime",
              type: "number",
              description: "Profiling end time in seconds.",
            },
            {
              name: "samples",
              optional: true,
              type: "array",
              items: { type: "integer" },
              description: "Ids of samples top nodes.",
            },
          ],
        },
        {
          id: "HeapSnapshotObjectId",
          type: "string",
          description: "Heap snashot object id.",
        },
      ],
      commands: [
        {
          name: "enable",
        },
        {
          name: "disable",
        },
        {
          name: "start",
        },
        {
          name: "stop",
          returns: [
            {
              name: "header",
              $ref: "ProfileHeader",
              description: "The header of the recorded profile.",
            },
          ],
        },
        {
          name: "getProfileHeaders",
          returns: [
            {
              name: "headers",
              type: "array",
              items: { $ref: "ProfileHeader" },
            },
          ],
        },
        {
          name: "getCPUProfile",
          parameters: [{ name: "uid", type: "integer" }],
          returns: [{ name: "profile", $ref: "CPUProfile" }],
        },
        {
          name: "removeProfile",
          parameters: [
            { name: "type", type: "string" },
            { name: "uid", type: "integer" },
          ],
        },
        {
          name: "clearProfiles",
        },
      ],
      events: [
        {
          name: "addProfileHeader",
          parameters: [{ name: "header", $ref: "ProfileHeader" }],
        },
        {
          name: "setRecordingProfile",
          parameters: [{ name: "isProfiling", type: "boolean" }],
        },
        {
          name: "resetProfiles",
        },
      ],
    },
    {
      domain: "HeapProfiler",
      hidden: true,
      types: [
        {
          id: "ProfileHeader",
          type: "object",
          description: "Profile header.",
          properties: [
            { name: "title", type: "string", description: "Profile title." },
            {
              name: "uid",
              type: "integer",
              description: "Unique identifier of the profile.",
            },
            {
              name: "maxJSObjectId",
              type: "integer",
              optional: true,
              description: "Last seen JS object Id.",
            },
          ],
        },
        {
          id: "HeapSnapshotObjectId",
          type: "string",
          description: "Heap snashot object id.",
        },
      ],
      commands: [
        {
          name: "getProfileHeaders",
          returns: [
            {
              name: "headers",
              type: "array",
              items: { $ref: "ProfileHeader" },
            },
          ],
        },
        {
          name: "startTrackingHeapObjects",
        },
        {
          name: "stopTrackingHeapObjects",
        },
        {
          name: "getHeapSnapshot",
          parameters: [{ name: "uid", type: "integer" }],
        },
        {
          name: "removeProfile",
          parameters: [{ name: "uid", type: "integer" }],
        },
        {
          name: "clearProfiles",
        },
        {
          name: "takeHeapSnapshot",
          parameters: [
            {
              name: "reportProgress",
              type: "boolean",
              optional: true,
              description:
                "If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken.",
            },
          ],
        },
        {
          name: "collectGarbage",
        },
        {
          name: "getObjectByHeapObjectId",
          parameters: [
            { name: "objectId", $ref: "HeapSnapshotObjectId" },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "Symbolic group name that can be used to release multiple objects.",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "Runtime.RemoteObject",
              description: "Evaluation result.",
            },
          ],
        },
        {
          name: "getHeapObjectId",
          parameters: [
            {
              name: "objectId",
              $ref: "Runtime.RemoteObjectId",
              description:
                "Identifier of the object to get heap object id for.",
            },
          ],
          returns: [
            {
              name: "heapSnapshotObjectId",
              $ref: "HeapSnapshotObjectId",
              description:
                "Id of the heap snapshot object corresponding to the passed remote object id.",
            },
          ],
        },
      ],
      events: [
        {
          name: "addProfileHeader",
          parameters: [{ name: "header", $ref: "ProfileHeader" }],
        },
        {
          name: "addHeapSnapshotChunk",
          parameters: [
            { name: "uid", type: "integer" },
            { name: "chunk", type: "string" },
          ],
        },
        {
          name: "finishHeapSnapshot",
          parameters: [{ name: "uid", type: "integer" }],
        },
        {
          name: "resetProfiles",
        },
        {
          name: "reportHeapSnapshotProgress",
          parameters: [
            { name: "done", type: "integer" },
            { name: "total", type: "integer" },
          ],
        },
        {
          name: "lastSeenObjectId",
          description:
            "If heap objects tracking has been started then backend regulary sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.",
          parameters: [
            { name: "lastSeenObjectId", type: "integer" },
            { name: "timestamp", type: "number" },
          ],
        },
        {
          name: "heapStatsUpdate",
          description:
            "If heap objects tracking has been started then backend may send update for one or more fragments",
          parameters: [
            {
              name: "statsUpdate",
              type: "array",
              items: { type: "integer" },
              description:
                "An array of triplets. Each triplet describes a fragment. The first integer is the fragment index, the second integer is a total count of objects for the fragment, the third integer is a total size of the objects for the fragment.",
            },
          ],
        },
      ],
    },
    {
      domain: "Worker",
      hidden: true,
      types: [],
      commands: [
        {
          name: "enable",
        },
        {
          name: "disable",
        },
        {
          name: "sendMessageToWorker",
          parameters: [
            { name: "workerId", type: "integer" },
            { name: "message", type: "object" },
          ],
        },
        {
          name: "canInspectWorkers",
          description: "Tells whether browser supports workers inspection.",
          returns: [
            {
              name: "result",
              type: "boolean",
              description: "True if browser has workers support.",
            },
          ],
        },
        {
          name: "connectToWorker",
          parameters: [{ name: "workerId", type: "integer" }],
        },
        {
          name: "disconnectFromWorker",
          parameters: [{ name: "workerId", type: "integer" }],
        },
        {
          name: "setAutoconnectToWorkers",
          parameters: [{ name: "value", type: "boolean" }],
        },
      ],
      events: [
        {
          name: "workerCreated",
          parameters: [
            { name: "workerId", type: "integer" },
            { name: "url", type: "string" },
            { name: "inspectorConnected", type: "boolean" },
          ],
        },
        {
          name: "workerTerminated",
          parameters: [{ name: "workerId", type: "integer" }],
        },
        {
          name: "dispatchMessageFromWorker",
          parameters: [
            { name: "workerId", type: "integer" },
            { name: "message", type: "object" },
          ],
        },
        {
          name: "disconnectedFromWorker",
        },
      ],
    },
    {
      domain: "Canvas",
      hidden: true,
      types: [
        {
          id: "ResourceId",
          type: "string",
          description: "Unique resource identifier.",
        },
        {
          id: "ResourceStateDescriptor",
          type: "object",
          description: "Resource state descriptor.",
          properties: [
            { name: "name", type: "string", description: "State name." },
            {
              name: "enumValueForName",
              type: "string",
              optional: true,
              description:
                "String representation of the enum value, if <code>name</code> stands for an enum.",
            },
            {
              name: "value",
              $ref: "CallArgument",
              optional: true,
              description: "The value associated with the particular state.",
            },
            {
              name: "values",
              type: "array",
              items: { $ref: "ResourceStateDescriptor" },
              optional: true,
              description:
                "Array of values associated with the particular state. Either <code>value</code> or <code>values</code> will be specified.",
            },
            {
              name: "isArray",
              type: "boolean",
              optional: true,
              description:
                "True iff the given <code>values</code> items stand for an array rather than a list of grouped states.",
            },
          ],
        },
        {
          id: "ResourceState",
          type: "object",
          description: "Resource state.",
          properties: [
            { name: "id", $ref: "ResourceId" },
            { name: "traceLogId", $ref: "TraceLogId" },
            {
              name: "descriptors",
              type: "array",
              items: { $ref: "ResourceStateDescriptor" },
              optional: true,
              description: "Describes current <code>Resource</code> state.",
            },
            {
              name: "imageURL",
              type: "string",
              optional: true,
              description: "Screenshot image data URL.",
            },
          ],
        },
        {
          id: "CallArgument",
          type: "object",
          properties: [
            {
              name: "description",
              type: "string",
              description: "String representation of the object.",
            },
            {
              name: "enumName",
              type: "string",
              optional: true,
              description:
                "Enum name, if any, that stands for the value (for example, a WebGL enum name).",
            },
            {
              name: "resourceId",
              $ref: "ResourceId",
              optional: true,
              description:
                "Resource identifier. Specified for <code>Resource</code> objects only.",
            },
            {
              name: "type",
              type: "string",
              optional: true,
              enum: [
                "object",
                "function",
                "undefined",
                "string",
                "number",
                "boolean",
              ],
              description:
                "Object type. Specified for non <code>Resource</code> objects only.",
            },
            {
              name: "subtype",
              type: "string",
              optional: true,
              enum: ["array", "null", "node", "regexp", "date"],
              description:
                "Object subtype hint. Specified for <code>object</code> type values only.",
            },
            {
              name: "remoteObject",
              $ref: "Runtime.RemoteObject",
              optional: true,
              description: "The <code>RemoteObject</code>, if requested.",
            },
          ],
        },
        {
          id: "Call",
          type: "object",
          properties: [
            { name: "contextId", $ref: "ResourceId" },
            { name: "functionName", type: "string", optional: true },
            {
              name: "arguments",
              type: "array",
              items: { $ref: "CallArgument" },
              optional: true,
            },
            { name: "result", $ref: "CallArgument", optional: true },
            { name: "isDrawingCall", type: "boolean", optional: true },
            { name: "isFrameEndCall", type: "boolean", optional: true },
            { name: "property", type: "string", optional: true },
            { name: "value", $ref: "CallArgument", optional: true },
            { name: "sourceURL", type: "string", optional: true },
            { name: "lineNumber", type: "integer", optional: true },
            { name: "columnNumber", type: "integer", optional: true },
          ],
        },
        {
          id: "TraceLogId",
          type: "string",
          description: "Unique trace log identifier.",
        },
        {
          id: "TraceLog",
          type: "object",
          properties: [
            { name: "id", $ref: "TraceLogId" },
            { name: "calls", type: "array", items: { $ref: "Call" } },
            {
              name: "contexts",
              type: "array",
              items: { $ref: "CallArgument" },
            },
            { name: "startOffset", type: "integer" },
            { name: "alive", type: "boolean" },
            { name: "totalAvailableCalls", type: "number" },
          ],
        },
      ],
      commands: [
        {
          name: "enable",
          description: "Enables Canvas inspection.",
        },
        {
          name: "disable",
          description: "Disables Canvas inspection.",
        },
        {
          name: "dropTraceLog",
          parameters: [{ name: "traceLogId", $ref: "TraceLogId" }],
        },
        {
          name: "hasUninstrumentedCanvases",
          returns: [{ name: "result", type: "boolean" }],
          description:
            "Checks if there is any uninstrumented canvas in the inspected page.",
        },
        {
          name: "captureFrame",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              optional: true,
              description:
                "Identifier of the frame containing document whose canvases are to be captured. If omitted, main frame is assumed.",
            },
          ],
          returns: [
            {
              name: "traceLogId",
              $ref: "TraceLogId",
              description:
                "Identifier of the trace log containing captured canvas calls.",
            },
          ],
          description:
            "Starts (or continues) a canvas frame capturing which will be stopped automatically after the next frame is prepared.",
        },
        {
          name: "startCapturing",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              optional: true,
              description:
                "Identifier of the frame containing document whose canvases are to be captured. If omitted, main frame is assumed.",
            },
          ],
          returns: [
            {
              name: "traceLogId",
              $ref: "TraceLogId",
              description:
                "Identifier of the trace log containing captured canvas calls.",
            },
          ],
          description:
            "Starts (or continues) consecutive canvas frames capturing. The capturing is stopped by the corresponding stopCapturing command.",
        },
        {
          name: "stopCapturing",
          parameters: [{ name: "traceLogId", $ref: "TraceLogId" }],
        },
        {
          name: "getTraceLog",
          parameters: [
            { name: "traceLogId", $ref: "TraceLogId" },
            { name: "startOffset", type: "integer", optional: true },
            { name: "maxLength", type: "integer", optional: true },
          ],
          returns: [{ name: "traceLog", $ref: "TraceLog" }],
        },
        {
          name: "replayTraceLog",
          parameters: [
            { name: "traceLogId", $ref: "TraceLogId" },
            {
              name: "stepNo",
              type: "integer",
              description:
                "Last call index in the trace log to replay (zero based).",
            },
          ],
          returns: [
            { name: "resourceState", $ref: "ResourceState" },
            {
              name: "replayTime",
              type: "number",
              description: "Replay time (in milliseconds).",
            },
          ],
        },
        {
          name: "getResourceState",
          parameters: [
            { name: "traceLogId", $ref: "TraceLogId" },
            { name: "resourceId", $ref: "ResourceId" },
          ],
          returns: [{ name: "resourceState", $ref: "ResourceState" }],
        },
        {
          name: "evaluateTraceLogCallArgument",
          parameters: [
            { name: "traceLogId", $ref: "TraceLogId" },
            {
              name: "callIndex",
              type: "integer",
              description: "Index of the call to evaluate on (zero based).",
            },
            {
              name: "argumentIndex",
              type: "integer",
              description:
                "Index of the argument to evaluate (zero based). Provide <code>-1</code> to evaluate call result.",
            },
            {
              name: "objectGroup",
              type: "string",
              optional: true,
              description:
                "String object group name to put result into (allows rapid releasing resulting object handles using <code>Runtime.releaseObjectGroup</code>).",
            },
          ],
          returns: [
            {
              name: "result",
              $ref: "Runtime.RemoteObject",
              optional: true,
              description: "Object wrapper for the evaluation result.",
            },
            {
              name: "resourceState",
              $ref: "ResourceState",
              optional: true,
              description: "State of the <code>Resource</code> object.",
            },
          ],
          description: "Evaluates a given trace call argument or its result.",
        },
      ],
      events: [
        {
          name: "contextCreated",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              description:
                "Identifier of the frame containing a canvas with a context.",
            },
          ],
          description:
            "Fired when a canvas context has been created in the given frame. The context may not be instrumented (see hasUninstrumentedCanvases command).",
        },
        {
          name: "traceLogsRemoved",
          parameters: [
            {
              name: "frameId",
              $ref: "Page.FrameId",
              optional: true,
              description:
                "If given, trace logs from the given frame were removed.",
            },
            {
              name: "traceLogId",
              $ref: "TraceLogId",
              optional: true,
              description: "If given, trace log with the given ID was removed.",
            },
          ],
          description:
            "Fired when a set of trace logs were removed from the backend. If no parameters are given, all trace logs were removed.",
        },
      ],
    },
    {
      domain: "Input",
      types: [
        {
          id: "TouchPoint",
          type: "object",
          hidden: true,
          properties: [
            {
              name: "state",
              type: "string",
              enum: [
                "touchPressed",
                "touchReleased",
                "touchMoved",
                "touchStationary",
                "touchCancelled",
              ],
              description: "State of the touch point.",
            },
            {
              name: "x",
              type: "integer",
              description:
                "X coordinate of the event relative to the main frame's viewport.",
            },
            {
              name: "y",
              type: "integer",
              description:
                "Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.",
            },
            {
              name: "radiusX",
              type: "integer",
              optional: true,
              description: "X radius of the touch area (default: 1).",
            },
            {
              name: "radiusY",
              type: "integer",
              optional: true,
              description: "Y radius of the touch area (default: 1).",
            },
            {
              name: "rotationAngle",
              type: "number",
              optional: true,
              description: "Rotation angle (default: 0.0).",
            },
            {
              name: "force",
              type: "number",
              optional: true,
              description: "Force (default: 1.0).",
            },
            {
              name: "id",
              type: "number",
              optional: true,
              description:
                "Identifier used to track touch sources between events, must be unique within an event.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "dispatchKeyEvent",
          parameters: [
            {
              name: "type",
              type: "string",
              enum: ["keyDown", "keyUp", "rawKeyDown", "char"],
              description: "Type of the key event.",
            },
            {
              name: "modifiers",
              type: "integer",
              optional: true,
              description:
                "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).",
            },
            {
              name: "timestamp",
              type: "number",
              optional: true,
              description:
                "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).",
            },
            {
              name: "text",
              type: "string",
              optional: true,
              description:
                'Text as generated by processing a virtual key code with a keyboard layout. Not needed for for <code>keyUp</code> and <code>rawKeyDown</code> events (default: "")',
            },
            {
              name: "unmodifiedText",
              type: "string",
              optional: true,
              description:
                'Text that would have been generated by the keyboard if no modifiers were pressed (except for shift). Useful for shortcut (accelerator) key handling (default: "").',
            },
            {
              name: "keyIdentifier",
              type: "string",
              optional: true,
              description:
                "Unique key identifier (e.g., 'U+0041') (default: \"\").",
            },
            {
              name: "windowsVirtualKeyCode",
              type: "integer",
              optional: true,
              description: "Windows virtual key code (default: 0).",
            },
            {
              name: "nativeVirtualKeyCode",
              type: "integer",
              optional: true,
              description: "Native virtual key code (default: 0).",
            },
            {
              name: "autoRepeat",
              type: "boolean",
              optional: true,
              description:
                "Whether the event was generated from auto repeat (default: false).",
            },
            {
              name: "isKeypad",
              type: "boolean",
              optional: true,
              description:
                "Whether the event was generated from the keypad (default: false).",
            },
            {
              name: "isSystemKey",
              type: "boolean",
              optional: true,
              description:
                "Whether the event was a system key event (default: false).",
            },
          ],
          description: "Dispatches a key event to the page.",
        },
        {
          name: "dispatchMouseEvent",
          parameters: [
            {
              name: "type",
              type: "string",
              enum: ["mousePressed", "mouseReleased", "mouseMoved"],
              description: "Type of the mouse event.",
            },
            {
              name: "x",
              type: "integer",
              description:
                "X coordinate of the event relative to the main frame's viewport.",
            },
            {
              name: "y",
              type: "integer",
              description:
                "Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.",
            },
            {
              name: "modifiers",
              type: "integer",
              optional: true,
              description:
                "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).",
            },
            {
              name: "timestamp",
              type: "number",
              optional: true,
              description:
                "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).",
            },
            {
              name: "button",
              type: "string",
              enum: ["none", "left", "middle", "right"],
              optional: true,
              description: 'Mouse button (default: "none").',
            },
            {
              name: "clickCount",
              type: "integer",
              optional: true,
              description:
                "Number of times the mouse button was clicked (default: 0).",
            },
            {
              name: "deviceSpace",
              type: "boolean",
              optional: true,
              hidden: true,
              description:
                "If true, x and y are given in dip wrt current viewport.",
            },
          ],
          description: "Dispatches a mouse event to the page.",
        },
        {
          name: "dispatchTouchEvent",
          hidden: true,
          parameters: [
            {
              name: "type",
              type: "string",
              enum: ["touchStart", "touchEnd", "touchMove"],
              description: "Type of the touch event.",
            },
            {
              name: "touchPoints",
              type: "array",
              items: { $ref: "TouchPoint" },
              description: "Touch points.",
            },
            {
              name: "modifiers",
              type: "integer",
              optional: true,
              description:
                "Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0).",
            },
            {
              name: "timestamp",
              type: "number",
              optional: true,
              description:
                "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).",
            },
          ],
          description: "Dispatches a touch event to the page.",
        },
        {
          name: "dispatchGestureEvent",
          hidden: true,
          parameters: [
            {
              name: "type",
              type: "string",
              enum: [
                "scrollBegin",
                "scrollEnd",
                "scrollUpdate",
                "tapDown",
                "tap",
                "pinchBegin",
                "pinchEnd",
                "pinchUpdate",
              ],
              description: "Type of the gesture event.",
            },
            {
              name: "x",
              type: "integer",
              description: "X coordinate relative to the screen's viewport.",
            },
            {
              name: "y",
              type: "integer",
              description: "Y coordinate relative to the screen's viewport.",
            },
            {
              name: "timestamp",
              type: "number",
              optional: true,
              description:
                "Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time).",
            },
            {
              name: "deltaX",
              type: "integer",
              optional: true,
              description: "Delta X where apllies.",
            },
            {
              name: "deltaY",
              type: "integer",
              optional: true,
              description: "Delta Y where apllies.",
            },
            {
              name: "pinchScale",
              type: "number",
              optional: true,
              description: "Pinch scale.",
            },
          ],
          description: "Dispatches a gesture event to the page.",
        },
      ],
      events: [],
    },
    {
      domain: "LayerTree",
      hidden: true,
      types: [
        {
          id: "LayerId",
          type: "string",
          description: "Unique Layer identifier.",
        },
        {
          id: "Layer",
          type: "object",
          description: "Information about a compositing layer.",
          properties: [
            {
              name: "layerId",
              $ref: "LayerId",
              description: "The unique id for this layer.",
            },
            {
              name: "parentLayerId",
              $ref: "LayerId",
              optional: true,
              description: "The id of parent (not present for root).",
            },
            {
              name: "nodeId",
              $ref: "DOM.NodeId",
              optional: true,
              description: "The id for the node associated with this layer.",
            },
            {
              name: "offsetX",
              type: "number",
              description: "Offset from parent layer, X coordinate.",
            },
            {
              name: "offsetY",
              type: "number",
              description: "Offset from parent layer, X coordinate.",
            },
            { name: "width", type: "number", description: "Layer width." },
            { name: "height", type: "number", description: "Layer height." },
            {
              name: "transform",
              type: "array",
              items: { type: "number" },
              minItems: 16,
              maxItems: 16,
              optional: true,
              description:
                "Transformation matrix for layer, default is identity matrix",
            },
            {
              name: "anchorX",
              type: "number",
              optional: true,
              description:
                "Transform anchor point X, absent if no transform specified",
            },
            {
              name: "anchorY",
              type: "number",
              optional: true,
              description:
                "Transform anchor point Y, absent if no transform specified",
            },
            {
              name: "anchorZ",
              type: "number",
              optional: true,
              description:
                "Transform anchor point Z, absent if no transform specified",
            },
            {
              name: "paintCount",
              type: "integer",
              description: "Indicates how many time this layer has painted.",
            },
            {
              name: "invisible",
              type: "boolean",
              optional: true,
              description: "Set if layer is not visible.",
            },
          ],
        },
      ],
      commands: [
        {
          name: "enable",
          description: "Enables compositing tree inspection.",
        },
        {
          name: "disable",
          description: "Disables compositing tree inspection.",
        },
        {
          name: "getLayers",
          parameters: [
            {
              name: "nodeId",
              optional: true,
              $ref: "DOM.NodeId",
              description:
                "Root of the subtree for which we want to gather layers (return entire tree if not specified)",
            },
          ],
          description: "Returns the layer tree structure of the current page.",
          returns: [
            {
              name: "layers",
              type: "array",
              items: { $ref: "Layer" },
              description: "Child layers.",
            },
          ],
        },
        {
          name: "compositingReasons",
          parameters: [
            {
              name: "layerId",
              $ref: "LayerId",
              description:
                "The id of the layer for which we want to get the reasons it was composited.",
            },
          ],
          description:
            "Provides the reasons why the given layer was composited.",
          returns: [
            {
              name: "compositingReasons",
              type: "array",
              items: { type: "string" },
              description:
                "A list of strings specifying reasons for the given layer to become composited.",
            },
          ],
        },
      ],
      events: [
        {
          name: "layerTreeDidChange",
        },
      ],
    },
    {
      domain: "Tracing",
      hidden: true,
      commands: [
        {
          name: "start",
          description: "Strart trace events collection.",
          parameters: [
            {
              name: "categories",
              type: "string",
              description: "Category/tag filter",
            },
          ],
        },
        {
          name: "end",
          description: "Stop trace events collection.",
        },
      ],
      events: [
        {
          name: "dataCollected",
          parameters: [
            { name: "value", type: "array", items: { type: "object" } },
          ],
        },
        {
          name: "tracingComplete",
        },
      ],
    },
  ],
};

Object.assign(constants);
export { constants };
