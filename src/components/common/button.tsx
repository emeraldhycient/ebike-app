import React, { memo, ComponentProps, ReactNode } from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
    Button as BaseButton,
} from 'react-native';
import { Text } from './text';
import Colors from '../../theme/colors';

type ButtonProps = ComponentProps<typeof BaseButton> & {
    title?: string;
    isLoading?: boolean;
    loaderColor?: string;
    outlined?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode
    containerStyle?: StyleProp<ViewStyle>;
};

export const Button = ({
    title,
    isLoading = false,
    outlined,
    children,
    style,
    ...rest
}: ButtonProps) => {
    return (
        <TouchableOpacity
            disabled={isLoading}
            style={[
                styles.btn,
                {
                    backgroundColor: outlined ? 'transparent' : Colors.black,
                    borderWidth: outlined ? 1 : 0,
                    borderColor: outlined ? '#7D97C0' : 'transparent',
                },
                style,
            ]}
            {...rest}>
            {
                title ?
                    <Text
                        fontSize={15}
                        color={outlined ? '#7D97C0' :'white' }
                        fontWeight={'bold'}
                    >
                        {title}
                    </Text> :
                    children
            }


        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        height: 60,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
