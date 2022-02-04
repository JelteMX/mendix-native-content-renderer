[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Support](https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg)](https://docs.mendix.com/developerportal/app-store/app-store-content-support)
[![Studio](https://img.shields.io/badge/Studio%20version-9.6%2B-blue.svg)](https://appstore.home.mendix.com/link/modeler/)
[![GitHub release](https://img.shields.io/github/release/JelteMX/mendix-native-content-renderer)](https://github.com/JelteMX/mendix-native-content-renderer/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/JelteMX/mendix-native-content-renderer)](https://github.com/JelteMX/mendix-native-content-renderer/issues)
# Mendix Native Content Renderer

![AppStoreIcon](/assets/AppStoreIcon.png)

Do you want to render HTML or Markdown in your Mendix Native app? Want to display a JSON?

[![overview](/assets/overview-small.png)](/assets/overview-big.png)

It uses the following libraries to do so:

- [react-native-render-html](https://www.npmjs.com/package/react-native-json-tree) (6.3.4) - [Official website](https://meliorence.github.io/react-native-render-html/)
  - Renders HTML in your React Native app
- [marked](https://www.npmjs.com/package/react-native-json-tree) (4.0.12) - [Official website](https://marked.js.org/)
  - Converts Markdown to HTML, then renders the HTML using the previous package
  - Supports almost all [GFM and Commonmark](https://github.com/markedjs/marked/discussions/1202#discussioncomment-1907552)
- [react-native-json-tree](https://www.npmjs.com/package/react-native-json-tree) (1.3.0)
  - Renders a JSON tree in your application

## Features

- Render HTML
- Render Markdown
- Custom link handler for HTML/Markdown
- Render JSON
## Usage

### Data

- Select your Source, this should be a String, containing HTML/Markdown/JSON
- Select your Type, this is a number
  - 0 = HTML
  - 1 = Markdown
  - 2 = JSON
  - If it does not recognize the number, it will revert to `HTML`

### Link handling

> Only applies to HTML/Markdown

- Upon clicking a link, you can let the widget decide what to do:
  - If you select an Action, that will be used by the widget when you click any hyperlink
  - If you do not select an Action, it will let the system handle it (e.g. open a link in a browser)
- Link Attribute can be used (preferably in a non-persistent Entity) to pass the link to your nanoflow. That way you have total control over what you do with any link

### JSON

- The JSON tree has different themes. Right now we can't set this through normal theming, hence the option to select it here. Included themes can be found [here](https://github.com/reduxjs/redux-devtools/tree/75322b15ee7ba03fddf10ac3399881e302848874/src/react/themes)

## Styling

Styling (except the JSON Viewer, see settings) is done in normal [Mendix Native Styling](https://docs.mendix.com/refguide/native-styling-refguide) procedures.

Class: `com_mendixlabs_widget_native_contentrenderer_ContentRenderer`

```js
export const com_mendixlabs_widget_native_contentrenderer_ContentRenderer = {
    container: {
        flex: 1,
        height: "100%",
        minHeight: 300
    },
    content: {
        color: "#444"
    }
};
```

The widget's style properties are as follows:

```xml
<container>
    <content />
</container>
```

| Element | Style Properties | Description |
| - | - | - |
| `container` | This has all ViewStyle properties | |
| `content` | This is a special one of type [`MixedStyleDeclaration`](https://meliorence.github.io/react-native-render-html/api/mixedstyledeclaration). _**Only applies to HTML/Markdown view!**_ | Describes the default style for the document, see [documentation](https://meliorence.github.io/react-native-render-html/api/renderhtmlprops#basestyle). By default the widget only sets the font color to `#444`, see [defaultStyles](/src/ui/style.ts) |


## Issues, suggestions and feature requests

> This widget is **NOT** officially supported by Mendix

Report your issues on Github, see [here](https://github.com/JelteMX/mendix-native-content-renderer/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

## License

Apache-2
