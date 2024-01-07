import {navigatorContainer,useNavigation} from "@react-navigation/native"
import{createStackNavigator} from "@react-navigation/stack"
import{View} from"react-native"

const app =()=>{
    const stack=createStackNavigator()
    return (
        <View>
         <navigatorContainer>
            <stack.navigator>
                <stack.Screen name="login" com/>
                    
               
            </stack.navigator>
            </navigatorContainer>
        </View>
    )
}
