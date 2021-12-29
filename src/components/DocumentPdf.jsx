import React from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';

const Documentpdf = ({ name, location, echo3, echo4, gang1, gang2, gang3 }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={{
          margin: "50px"
        }}>
          <Text style={{
            margin: 0,
            textAlign: "center",
            fontSize: "40px"
          }}>Alexa</Text>
          <View>
            <Text style={{
              margin: "15px"
            }}>Información:</Text>
            <Text>Nombre: <Text style={{
              display: "flex",
              alignItems: "center",
              color: "blue"
            }}>{name ? name : "..."}</Text></Text>

          </View>
          <View >
            <Text>Ubicación: <Text style={{
              display: "flex",
              alignItems: "center",
              color: "blue"
            }}>{location}</Text></Text>

          </View>
          {
            echo3 !== 0 || echo4 ? (
              <View>
                <Text style={{
                  margin: "15px"
                }}>Cornetas Echo dots:</Text>
                <View style={{

                }}>
                  <Text style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}><View style={{
                    width: 10,
                    height: 20,
                    backgroundColor: "#15A5F5"
                  }}></View>Echo dot 3g: <Text style={{
                    display: "flex",
                    alignItems: "center",
                    color: "blue"
                  }}>
                      {echo3}
                    </Text> </Text>
                </View>
                <View>
                  <Text style={{
                    display: "flex",
                    alignItems: "center"
                  }}><View style={{
                    width: "10",
                    height: "20",
                    margin: "0 1",
                    backgroundColor: "#15A5F5"
                  }}></View>Echo dot 4g: <Text style={{
                    display: "flex",
                    alignItems: "center",
                    color: "blue"
                  }}>{echo4}</Text></Text>
                </View>
              </View>
            ) :
              null
          }
          {/* <View className={echo3 !== 0 || echo4 !== 0 ? 'd-block' : 'd-none'} >
          <Text>Echos:</Text>
          <View className={echo3 ? 'd-block abstract__group' : 'd-none'}>
            <Text className="abstract__description"><View className="line"></View>Echo dot 3g: {echo3}</Text>
          </View>
          <View className={echo4 ? 'd-block abstract__group' : 'd-none'}>
            <Text className="abstract__description"><View className="line"></View>Echo dot 4g: {echo4}</Text>
          </View>
        </View> */}
          {
            gang1 !== 0 || gang2 !== 0 || gang3 !== 0 ? (
              <View>
                <Text style={{
                  margin: "15px"
                }}>Switch:</Text>
                <View >
                  <Text><View></View>Switch 1: <Text style={{
                    display: "flex",
                    alignItems: "center",
                    color: "blue"
                  }}>{gang1}</Text> </Text>
                </View>
                <View>
                  <Text><View></View>Switch 2: <Text style={{
                    display: "flex",
                    alignItems: "center",
                    color: "blue"
                  }}>{gang2}</Text> </Text>
                </View>
                <View>
                  <Text><View></View>Switch 3: <Text style={{
                    display: "flex",
                    alignItems: "center",
                    color: "blue"
                  }}>{gang3}</Text></Text>
                </View>
              </View>
            ) : null
          }
        </View>
      </Page>
    </Document>
  );
}

export default Documentpdf;
