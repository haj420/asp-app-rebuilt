import React, {Component, useEffect, useState, useRef } from 'react';
import { Alert, ImageBackground, Button, View, Text, StyleSheet, TouchableOpacity, Image, Linking, StatusBar, SafeAreaView, ScrollView, ActivityIndicator, useWindowDimensions, Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import { WebView } from 'react-native-webview';
// import Pdf from 'react-native-pdf';


// BRANDS SCREEN
function BrandsScreen({ navigation }) {
console.log('brands screen');
	return (
		<ScrollView style={{backgroundColor:'grey'}}>
		<View style={{flex:1,backgroundColor:'white'}}>
			<View style={{ height:50, backgroundColor: 'red' }} />
			<TouchableOpacity
			  onPress={() =>{navigation.push('Home')}}>
				<Image source={require('./assets/hamburgerMenu.png')} style={{alignSelf:'flex-start'}} />
			</TouchableOpacity>
	        <Image source={require('./assets/ASP-logo-black-red-PMS1788-1inDistCare-150dpi.png')} style={styles.brandsBanner, {alignSelf:'center', marginTop:'5%'}} />
			<View style={{borderTopColor:'black', borderTopWidth:1, height:'5%', marginTop:30, marginBottom:0}} />
			<TouchableOpacity
			  onPress={() =>{Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/ASP_product-brand-guide_031721.pdf")}}>
				<Image source={require('./assets/ourBrands.png')} style={{alignSelf:'flex-end', height:45, width:260, marginTop:0, alignSelf:'center'}} />
			</TouchableOpacity>

			<View style={{flex: 1, flexDirection: 'row'}}>
			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
			   <TouchableOpacity style={styles.brandsBtn}
				 onPress={() =>{Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/CAATS-Brand-Sheet-210601.pdf")}}>
				   <Image source={require('./assets/CAATS.png')} style={styles.brandsScreenButton}/>
			   </TouchableOpacity>
			   </View>
			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
			   <TouchableOpacity style={styles.brandsBtn}
				 onPress={() =>{Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/TruForm-Brand-Sheet-210716-flattened.pdf")}}>
				   <Image source={require('./assets/TruForm.jpeg')} style={styles.brandsScreenButton}/>
			   </TouchableOpacity>
			   </View>
			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/Heavy-Brite-Brand-Sheet-210706-flattened.pdf")}}>
 				   <Image source={require('./assets/HeavyBrite.png')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/Safe-Shield-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/SafeShield.jpeg')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/AdVer-Tag-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/AdVerTag.png')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/ViZi-Brand-Sheet-210601-flattened.pdf")}}>
 				   <Image source={require('./assets/Vizilogo.png')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row'}}>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}} >
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/Peel-n-Seal-Brand-Sheet-210716-flattened.pdf")}}>
 				   <Image source={require('./assets/PeelNSeal.png')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			   <View style={{width: '50%', height:100, justifyContent:'center'}}>
 			   <TouchableOpacity style={styles.brandsBtn}
 				 onPress={() =>{ Linking.openURL("https://www.autoserviceproducts.com/wp-content/uploads/File-Right-Brand-Sheet-210601-flattened.pdf")}}>
 				   <Image source={require('./assets/fileRight.png')} style={styles.brandsScreenButton}/>
 			   </TouchableOpacity>
 			   </View>
 			 </View>
			 <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
			 	<Text style={{paddingLeft:'5%', paddingRight:'5%', paddingBottom:50}}>ASP has created unique brands that you can present as YOURS, and none of them are based on the ASP name! Click on each logo to find out more.</Text>
			 </View>
		</View>
	  </ScrollView>
  );
}

// HOME SCREEN  (Now the menu screen)
function HomeScreen({ navigation }) {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
  <ScrollView
  style={styles.scrollView} 
  contentContainerStyle={styles.contentContainer}
  >
	    <View style={{width: width, marginBottom: 50}}>
			{/* <View style={{ height:50, backgroundColor: 'red' }} /> */}
			{/* <View style={{flexDirection: 'row'}}>
			   {/* <View style={{width: '20%', height:100, justifyContent:'center'}} >
				   <TouchableOpacity
					 onPress={() =>{navigation.push('BrandsScreen')}}>
				   <Image source={require('./assets/backArrow.png')} style={{alignSelf:'flex-start'}}/>
				   </TouchableOpacity>
			   </View> */}
		   	   {/* <View style={{width: '100%', height:100, justifyContent:'center'}} >
				    <Text style={{alignSelf:'center', fontSize:20}}>
				    Menu
				    </Text>
			     </View> */}
		  	{/* </View> */}
		        <Image source={require('./assets/aspBanner.png')} style={styles.logoBanner} />


		        <TouchableOpacity
		          onPress={() =>{ WebBrowser.openBrowserAsync("https://shop.autoserviceproducts.com/landing.asp?autopage=/Default.asp")}}>
		        <Image source={require('./assets/aspConnectBtn.png')} style={styles.TopHomeScreenButton}/>
		        </TouchableOpacity>

            {/* Webview Version */}
            <TouchableOpacity
		          onPress={() =>{navigation.push('CatSearchScreen')}}>
            <Image source={require('./assets/catalogBtn.png')} style={styles.HomeScreenButton}/>
            </TouchableOpacity>


		        <TouchableOpacity
		          onPress={() =>{ WebBrowser.openBrowserAsync("https://autoformsandsupplies.com/browse-products.php")}}>
		        <Image source={require('./assets/prodBtn.png')} style={styles.HomeScreenButton}/>
		        </TouchableOpacity>


            <TouchableOpacity
              onPress={() =>{ WebBrowser.openBrowserAsync("https://www.google.com/maps/search/?api=1&query=Automotive+Dealerships+near+me")}}>
            <Image source={require('./assets/lookupBtn.png')} style={styles.HomeScreenButton}/>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() =>{navigation.push('BrandsScreen')}}>
            <Image source={require('./assets/ourBrandsBtn.png')} style={styles.HomeScreenButton}/>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>{navigation.push('ContactUs')}}>
            <Image source={require('./assets/contactBtn.png')} style={styles.HomeScreenButton}/>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>{navigation.push('BeSocial')}}>
            <Image source={require('./assets/socialBtn.png')} style={styles.HomeScreenButton}/>
            </TouchableOpacity>
	    </View>
      </ScrollView>
  );
}

function CatSearchScreen({ navigation }) {
  const webViewRef = useRef(null);

  const handleGetUrl = () => {
    if (webViewRef.current) {
      // Improved error handling and user feedback
      webViewRef.current.injectJavaScript(`
        (function() {
          try {
            const url = window.location.href;
            if (url) {
              ReactNativeWebView.postMessage(JSON.stringify({ url }));
            } else {
              alert('Unable to retrieve current URL.');
            }
          } catch (error) {
            console.error('Error getting URL:', error);
            alert('An error occurred while retrieving the URL.');
          }
        })();
      `);
    } else {
      console.error('WebView ref not available.');
    }
  };
    return (
      <View style={styles.container, {flex:1, backgroundColor: 'white'}}>
        <View style={{ height:50, backgroundColor: 'red' }} />
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '20%', height:100, justifyContent:'center'}} >
            <TouchableOpacity
              onPress={() =>{navigation.push('Home')}}>
              <Image source={require('./assets/hamburgerMenu.png')} 
              style={{alignSelf:'flex-end'}} />
            </TouchableOpacity>
            </View>
            <View style={{width: '60%', height:100, justifyContent:'center', paddingLeft: 30}} >
            <TouchableOpacity
		          onPress={handleGetUrl}>
              <Image source={require('./assets/shareBtn.png')} style={styles.HomeScreenButton} />
            </TouchableOpacity>
            </View>
        </View>
        <WebView
          ref={webViewRef}
          source={{ uri: 'https://autoformsandsupplies.cld.bz/AUTO-CAT-2021' }}
          javaScriptEnabled = {true}
          onMessage={(event) => {
            const data = JSON.parse(event.nativeEvent.data);
            if (data.url) {
              console.log('Current URL:', data.url);
              Alert.alert('Share Link', '', [
                {
                  text: 'SMS', onPress: () => Linking.openURL("sms:?body=Here is the informationm you requested.: https://autoformsandsupplies.com?appLink=" + data.url)
                },
                {
                  text: 'EMAIL', onPress: () => Linking.openURL("mailto:wkstart@startadvertising.com?subject=Here is the information you requested&body=Here is the information you requested: https://autoformsandsupplies.com?appLink=" + data.url)
                },
                {
                  text: 'Cancel', onPress: () => console.log('Cancel')
                }
              ]);  }
          }}
        />
      </View>
  );
}

function BeSocialScreen({ navigation }) {
// SEND SOCIAL PHOTO
  return (
    <View style={styles.container}>
	<View style={{ height:50, backgroundColor: 'red' }} />
<View style={{flexDirection: 'row'}}>
   <View style={{width: '20%', height:100, justifyContent:'center'}} >
   <TouchableOpacity
			  onPress={() =>{navigation.push('Home')}}>
				<Image source={require('./assets/hamburgerMenu.png')} style={{alignSelf:'flex-end'}} />
			</TouchableOpacity>
   </View>
   {/* <View style={{width: '60%', height:100, justifyContent:'center'}} >
   <Text style={{alignSelf:'center', fontSize:20}}>
   Be Social
   </Text>
   </View> */}
</View>
      <Image source={require('./assets/aspBanner.png')} style={styles.SendPhotoBanner} />
      <Text style={{marginTop:20, marginBottom:100}}>Use this feature to send us a photo for use on ASP social media! For example, share a photo of a neat idea you handled for a dealer and then watch us on LinkedIn and Facebook to see ideas from others. </Text>
      <Button style={styles.button}
        title="Send Photo"
        onPress={() => Linking.openURL('mailto:CustomerService@AutoServiceProducts.com') }/>
      <Text>*Submission of a photo constitutes your permission for its publication on ASP social media.</Text>
      <View style={{justifyContent: 'center', flexDirection:'row', marginTop: 100}}>
      <TouchableOpacity
      onPress={() => Linking.openURL('https://www.facebook.com/AutoServiceProducts')}>
      <Image source={require('./assets/f_logo_RGB-Blue_58.png')} style={{alignSelf:'center', alignItems: 'baseline', height:70, resizeMode: 'contain'}}/>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => Linking.openURL('https://www.linkedin.com/company/automotive-service-products/about/')}>
      <Image source={require('./assets/LinkedIn.png')} style={{alignSelf:'center', alignItems: 'baseline', height:70, resizeMode: 'contain'}}/>
      </TouchableOpacity>
      </View>
    </View>
  );
}


function ContactUsScreen({ navigation }) {
// Contact Us Screen
  return (
      <ScrollView style={{flex: 1,flexDirection: 'column', backgroundColor:'white'}}>
		  <View style={{ height:50, backgroundColor: 'red' }} />
	  <View style={{flexDirection: 'row'}}>
		 <View style={{width: '20%', height:100, justifyContent:'center'}} >
		 <TouchableOpacity
			  onPress={() =>{navigation.push('Home')}}>
				<Image source={require('./assets/hamburgerMenu.png')} style={{alignSelf:'flex-end'}} />
			</TouchableOpacity>
		 </View>
		 {/* <View style={{width: '60%', height:100, justifyContent:'center'}} >
		 <Text style={{alignSelf:'center', fontSize:20}}>
		 Contact Us
		 </Text>
		 </View> */}
	</View>
		  <Image source={require('./assets/aspBanner.png')} style={styles.logoBanner, {width:'100%', height:180}} />
        <View style={styles.contactLabels}>
          <Text style={styles.contactH1, {color:'red', marginTop:30, fontSize:18, fontWeight:'bold'}}>PHONE</Text>
        </View>
        <View style={styles.contactLabels}>
          <Text style={styles.contactText}>Our goal is to answer your questions on the first call.</Text>
        </View>

        <View style={styles.contactLabels, {flexDirection:'row', marginLeft:10, marginTop:20, alignItems:'center'}}>
			<View style={{flex:1}}>
	          <Text style={styles.contactH2}>Local</Text>
			</View>
			<View style={{flex:1}}>
	          <TouchableOpacity onPress={() => Linking.openURL('tel:8595252220') }>
	            <Text style={styles.contactText}>859-525-2220</Text>
	          </TouchableOpacity>
	        </View>
		</View>
        <View style={styles.contactLabels, {flexDirection:'row', marginLeft:10, alignItems:'center'}}>
			<View style={{flex:1}}>
          <Text style={styles.contactH2}>TOLL FREE</Text>
		  </View>

  			<View style={{flex:1}}>
          <TouchableOpacity onPress={() => Linking.openURL('tel:8008435443') }>
            <Text style={styles.contactText}>800-843-5443</Text>
          </TouchableOpacity>
		  </View>
        </View>

        <View style={styles.contactLabels}>
          <Text style={styles.contactH1}>EMAIL</Text>
            <Text style={styles.contactH2}>Orders</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Orders@AutoServiceProducts.com') }>
              <Text style={styles.contactText, {textDecorationLine:'underline'}}>orders@autoserviceproducts.com</Text>
            </TouchableOpacity>

            <Text style={styles.contactH2}>Sales</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:Sales@AutoServiceProducts.com') } >
              <Text style={styles.contactText, {textDecorationLine:'underline'}}>sales@autoserviceproducts.com</Text>
            </TouchableOpacity>

           <Text style={styles.contactH2}>Service</Text>
           <TouchableOpacity onPress={() => Linking.openURL('mailto:CustomerService@AutoServiceProducts.com') }>
             <Text style={styles.contactText, {textDecorationLine:'underline'}}>customerservice@autoserviceproducts.com</Text>
           </TouchableOpacity>

           <Text style={styles.contactH2}>Artwork</Text>
           <TouchableOpacity onPress={() => Linking.openURL('mailto:artwork@AutoServiceProducts.com') }>
            <Text style={styles.contactText, {textDecorationLine:'underline'}}>artwork@autoserviceproducts.com</Text>
           </TouchableOpacity>
            <Text style= {styles.contactAddyH1}>MAILING ADDRESS</Text>
            <Text style= {styles.contactText}>Automotive Service Products</Text>
            <Text style= {styles.contactText}>P.O. Box 951</Text>
           <Text style= {styles.contactText}>Burlington, KY 41005</Text>

           <Text style= {styles.contactAddyH1}>SHIPPING ADDRESS</Text>
           <Text style= {styles.contactText}>Automotive Service Products</Text>
           <Text style= {styles.contactText}>1574 Production Drive</Text>
           <Text style= {styles.contactText}>Burlington, KY 41005</Text>
        </View>
      </ScrollView>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer screenOptions={{headerTransparent: true}} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, headerTransparent: true}}>
        <Stack.Screen name="BrandsScreen" component={BrandsScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CatSearchScreen" component={CatSearchScreen}/>
        <Stack.Screen name="BeSocial" component={BeSocialScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  topRedBar: {
	flex:1,
	backgroundColor:'red',

  },
  brandsBanner: {
	width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
	  flex:1,
      backgroundColor: 'white',
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
       padding: 10,
  },
  container: {
    flex: 3,
    backgroundColor: 'white',
    marginBottom: '50',
  },
  Background: {
    flex: 1,
    resizeMode: "cover",
  },
  logoBanner: {
    width: '100%',
    height: 200,
    top:0,
    resizeMode:'contain',
  },
  close: {
    alignSelf:'flex-start',
	margin:100,
    position: 'absolute',
    left:     50,
    top:      320,
    zIndex:9999
  },
  leftcircle: {
    alignSelf:'flex-start',
    position: 'absolute',
    left:     5,
    top:      220,
    zIndex:9999
  },
  SendPhotoBanner: {
    width: '100%',
    height: '20%',
    top:0,
    alignSelf: 'center',
  },
  SplashBanner: {
    width: '100%',
    height: 150,
    top:0,
  },
  ContactUsBanner: {
    width: '100%',
    height: '15%',
    top:0,
  },
  TopHomeScreenButton: {
	width:300,
  height: 70,
    // marginTop:10,
    alignSelf: 'center',
    // width: 350,
    resizeMode: 'contain',
  },
  brandsScreenButton: {
    marginTop:7,
    alignSelf: 'center',
    width: 150,
	height: 50,
    resizeMode: 'contain',
  },
  HomeScreenButton: {
    marginTop:7,
    alignSelf: 'center',
    width: 300,
	height: 50,
    resizeMode: 'contain',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    height:70,
    width: '100%',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    fontSize: 15,
    color:'white',
  },
  buttonText: {
    fontSize:24,
    color: 'white'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  contactUs: {
    alignItems: 'flex-start',
    textAlign: 'left',
    flex: 1,
    backgroundColor: 'white',
  },
  ASPLogoSm: {
    width:200,
    height:100,
    alignSelf:'center',
    resizeMode:'contain',
  },
  Contactbutton: {
    color: 'white',
    alignSelf:'flex-end',
    paddingLeft:'0px',
    fontSize:5,
  },
  contactLabels: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    flex:1
  },
  contactH1: {
    marginTop:20,
    color: 'red',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactH2: {
	marginTop:10,
    color: 'black',
    alignSelf:'flex-start',
    fontWeight:'bold',
    fontSize:16,
    flex:1
  },
  contactAddyH1: {
    marginTop:10,
    color: 'red',
    alignSelf:'flex-start',
    fontSize:18,
    fontWeight:'bold',
    flex:1
  },
  contactText: {
    color: 'black',
    alignSelf:'flex-start',
    fontSize:12,
  },
  brandsBtn: {
    padding:0,
	margin:0,
	height:100,
	alignItems: 'center',
	justifyContent: 'center'
  },
  pdf: {
    flex: 1, 
    alignSelf: "stretch"
  },
  map: {
    width: '100%',
    height: '100%',
  }, 
  scrollView: {
    height: '100%',
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  }
});
export default App;