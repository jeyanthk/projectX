import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, StatusBar } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/home1.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Tagline goes here</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText}>Log In</Text>
      </View>
      <View style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    backgroundColor: "#B33D38",
  },
  tagline: {
    fontWeight: 800,
    fontSize: 18,
    backgroundColor: "red",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#B33D38",
    alignItems: "center",
  },
  signUpButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#649390",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 26,
    fontWeight: 400,
    paddingTop: 20,
  },
});

export default WelcomeScreen;