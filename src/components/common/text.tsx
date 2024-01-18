import React, { ComponentProps, ReactNode, memo, useMemo } from 'react';
import { StyleProp, TextStyle, Text as BaseText } from 'react-native';


type TextProps = ComponentProps<typeof BaseText> & {
    text?: string;
    children?: ReactNode,
    fontSize?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    color?: string;
    fontFamily?:string,
    lineHeight?: number;
    fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
    style?: StyleProp<TextStyle>;
};

export const Text = memo(
    ({
        text,
        fontSize = 14,
        lineHeight,
        onPress,
        textAlign,
        color = '#000',
        fontWeight = '400',
        children,
        fontFamily,
        style,
        ...rest
    }: TextProps) => {
        const propsStyle = useMemo(
            () => ({
                color,
                fontSize,
                textAlign,
                lineHeight,
                fontWeight,
                fontFamily,
            }),
            [color, textAlign, fontWeight, fontFamily, lineHeight, fontSize],
        );

        return (
            <BaseText onPress={onPress} style={[propsStyle, style]} {...rest}>
                {text ?? children}
            </BaseText>
        );
    },
);
