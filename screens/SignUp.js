import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View className="w-full h-full bg-white">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require("../assets/background.jpg")}
      />
     
      {/* View này bao gồm nội dung và form */}
      <View className="h-full w-full flex justify-around pt-30">
        {/* View chứa text Sign Up */}
        <View className="flex items-center">
          <Text className=" font-bold tracking-wider text-5xl">
            Sign Up
          </Text>
        </View>
        {/* View chứa form */}
        <View className="flex items-center  mx-4 space-y-4">
          {/* View Username */}
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Username" placeholderTextColor={"black"} />
          </View>
          {/* View Email */}
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"black"} />
          </View>
          {/* View Password */}
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"black"}
              secureTextEntry
            />
          </View>
          {/* View SignUp */}
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className=" font-bold text-xl text-center">
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          {/* View Login */}
          <View className="flex-row justify-center">
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text className=" text-red-600">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
