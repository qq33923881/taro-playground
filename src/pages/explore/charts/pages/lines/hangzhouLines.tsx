import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';
import 'echarts/extension-src/bmap/bmap'

export default function hangzhouLines() {
  const [option, setOption] = useState<any>();

  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/hangzhou-tracks.json',
      dataType: "json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log('>>>>>>>request success👏')
        const lines = res?.data.map(function (track) {
          return {
            coords: track.map(function (seg, idx) {
              return seg.coord;
            })
          };
        });
        setOption({
          bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: 'water',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'land',
                  elementType: 'all',
                  stylers: {
                    color: '#f3f3f3'
                  }
                },
                {
                  featureType: 'railway',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'highway',
                  elementType: 'all',
                  stylers: {
                    color: '#fdfdfd'
                  }
                },
                {
                  featureType: 'highway',
                  elementType: 'labels',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry.fill',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'poi',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'green',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'subway',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'manmade',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'local',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'labels',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'boundary',
                  elementType: 'all',
                  stylers: {
                    color: '#fefefe'
                  }
                },
                {
                  featureType: 'building',
                  elementType: 'all',
                  stylers: {
                    color: '#d1d1d1'
                  }
                },
                {
                  featureType: 'label',
                  elementType: 'labels.text.fill',
                  stylers: {
                    color: '#999999'
                  }
                }
              ]
            }
          },
          series: [
            {
              type: 'lines',
              coordinateSystem: 'bmap',
              data: lines,
              polyline: true,
              lineStyle: {
                color: 'purple',
                opacity: 0.6,
                width: 1
              }
            }
          ]
        })
      },
      fail: err => {
        console.log('数据请求失败', err);
        Taro.showToast({
          icon: 'none',
          title: '数据请求失败'
        })
      }
    });
  }, [])

  return (
    <View>
      <View className="header">路径图杭州！！！</View>
      <View className="body">
        { option && <Chart option={option} /> }
      </View>
    </View>
  );
}
