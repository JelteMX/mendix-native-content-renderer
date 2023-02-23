import { ReactElement, createElement, memo } from "react";
import { GestureResponderEvent, View } from "react-native";
import RenderHTML, { RenderersProps, defaultSystemFonts } from "react-native-render-html";
import { useLayout } from "@react-native-community/hooks/lib/useLayout";

import { CustomStyle } from "../ui/style";

type Target = "_blank" | "_self" | "_parent" | "_top";
interface Props {
    styles: CustomStyle;
    html: string;
    fonts: string[];
    onPress: (
        event: GestureResponderEvent,
        href: string,
        htmlAttribs?: Record<string, string>,
        target?: Target
    ) => void;
}
const Renderer = memo(({ styles, html, fonts, onPress }: Props): ReactElement => {
    const { onLayout, ...layout } = useLayout();

    const rendererProps: Partial<RenderersProps> = {
        a: {
            onPress
        }
    };

    const systemFonts = [...fonts, ...defaultSystemFonts];

    return (
        <View style={styles.html.container} onLayout={onLayout}>
            {html ? (
                <RenderHTML
                    contentWidth={layout.width}
                    baseStyle={styles.html.base}
                    tagsStyles={styles.html.tags}
                    idsStyles={styles.html.ids}
                    systemFonts={systemFonts}
                    classesStyles={styles.html.classes}
                    renderersProps={rendererProps}
                    source={{ html }}
                />
            ) : (
                <View />
            )}
        </View>
    );
});

export { Renderer };
