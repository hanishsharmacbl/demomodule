
import React from 'react';

import {
    Text,
    View
} from 'react-native';

export const Header = ({ leftTitle, centerTitle }) => {
    return (
        <View style={
            {
                flexDirection: 'row',
                height: 64,
                width: '100%',
                backgroundColor: "black",
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16
            }}>
            {
                leftTitle ?
                    <Text style={{ color: "white", fontSize: 22, fontFamily: "bold" }}>{leftTitle}</Text>
                    :
                    null
            }
            {
                centerTitle ?
                    <Text style={{ color: "white", fontSize: 22, fontFamily: "bold" }}>{centerTitle}</Text>
                    :
                    null
            }
            <View />
        </View>
    );
};