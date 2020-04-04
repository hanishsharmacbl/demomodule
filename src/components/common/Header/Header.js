
import React from 'react';

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export const Header = (
    {
        leftTitle,
        centerTitle,
        rightTitle,
        leftTitleColor,
        centerTitleColor,
        rightTitleColor,
        paddingHorizontal,
        fontWeight,
        fontSize,
        leftIcon,
        rightIcon,
        middleIcon,
        leftIconOnPress,
        rightIconOnPress,
        middleIconOnPress,
        backgroundColor,
        headerHeight,
        flexDirection
    }
) => {
    return (
        <View style={
            {
                flexDirection: flexDirection,
                height: headerHeight,
                width: '100%',
                backgroundColor: backgroundColor,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: paddingHorizontal
            }}>
            {
                leftTitle ?
                    <Text style={{ color: leftTitleColor, fontSize: fontSize, fontWeight: fontWeight }}>{leftTitle}</Text>
                    :
                    <TouchableOpacity activeOpacity={0.5} onPress={leftIconOnPress}>
                        <Image source={leftIcon} />
                    </TouchableOpacity>
            }
            {
                centerTitle ?
                    <Text style={{ color: centerTitleColor, fontSize: fontSize, fontWeight: fontWeight }}>{centerTitle}</Text>
                    :
                    <TouchableOpacity activeOpacity={0.5} onPress={middleIconOnPress}>
                        <Image source={middleIcon} />
                    </TouchableOpacity>
            }
            {
                rightTitle ?
                    <Text style={{ color: rightTitleColor, fontSize: fontSize, fontWeight: "bold" }}>{rightTitle}</Text>
                    :
                    <TouchableOpacity activeOpacity={0.5} onPress={rightIconOnPress}>
                        <Image source={rightIcon} />
                    </TouchableOpacity>
            }
            <View />
        </View>
    );
};