import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const signup = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSignup = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's Get Started !</Text>
      <Text style={defaultStyles.descriptionText}>
        Please Enter your phone number. We will send you a confirmation code
        over there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.countryCodeInput}
          placeholder="Enter your phone number"
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={styles.mobileNumberInput}
          placeholder="Mobile number"
          placeholderTextColor={Colors.gray}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Link href={"/login"} asChild>
        <TouchableOpacity>
          <Text style={[defaultStyles.textLink, { marginBottom: 20 }]}>
            Already have an account ? Log in
          </Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 50 },
        ]}
        onPress={onSignup}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  countryCodeInput: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
    maxWidth: 80,
  },
  mobileNumberInput: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
    minWidth: 250,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default signup;
