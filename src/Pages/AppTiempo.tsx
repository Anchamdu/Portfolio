import { useState, useEffect } from "react";


export interface LocationNameCaceresRegionExtremaduraCountrySpainLat3948Lon637TzIDEuropeMadridLocaltimeEpoch1689238798Localtime202307131059CurrentLastUpdatedEpoch1689237900LastUpdated202307131045TempC269TempF804IsDay1ConditionTextSunnyIconCDNWeatherapiCOMWeather64X64Day113PNGCode1000WindMph54WindKph86WindDegree311WindDirNWPressureMB10180PressureIn3007PrecipMm00PrecipIn00Humidity36Cloud0FeelslikeC265FeelslikeF797VisKM100VisMiles60Uv70GustMph63GustKph101 {
  location: Location;
  current: Current;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}


export const AppTiempo = () => {

  const [apiData, setApiData] = useState<LocationNameCaceresRegionExtremaduraCountrySpainLat3948Lon637TzIDEuropeMadridLocaltimeEpoch1689238798Localtime202307131059CurrentLastUpdatedEpoch1689237900LastUpdated202307131045TempC269TempF804IsDay1ConditionTextSunnyIconCDNWeatherapiCOMWeather64X64Day113PNGCode1000WindMph54WindKph86WindDegree311WindDirNWPressureMB10180PressureIn3007PrecipMm00PrecipIn00Humidity36Cloud0FeelslikeC265FeelslikeF797VisKM100VisMiles60Uv70GustMph63GustKph101 | null>(null); // Corrección: se cambia "Weather" por "LocationNameCaceresRegionExtremaduraCountrySpainLat3948Lon637TzIDEuropeMadridLocaltimeEpoch1689238798Localtime202307131059CurrentLastUpdatedEpoch1689237900LastUpdated202307131045TempC269TempF804IsDay1ConditionTextSunnyIconCDNWeatherapiCOMWeather64X64Day113PNGCode1000WindMph54WindKph86WindDegree311WindDirNWPressureMB10180PressureIn3007PrecipMm00PrecipIn00Humidity36Cloud0FeelslikeC265FeelslikeF797VisKM100VisMiles60Uv70GustMph63GustKph101"
  const [location, setLocation] = useState<string>('Cáceres');

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d2a0aa31e609406ca8382121231307&q=${location}&days=5&aqi=no&alerts=no&lang=es`);
      const dataBuffer = await response.json();
      setApiData(dataBuffer);
    } catch (error) {
      console.log(error); // Corrección: se cambia "console.log.(error)" por "console.log(error)"
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []); // Corrección: se agrega un array vacío como segundo parámetro del hook useEffect

  return (
    <div className='flex px-4 py-4 flex-row justify-center items-center w-full grid-cols-5'>
      {apiData?.forecast.forecastday.map((day) => (
        <div className='flex flex-col justify-center bg-amber-200 grid-cols-5' key={day.date}>
          <h1>Día: {day.date}</h1>
          <Button></Button>
          <h2>Máximas: {day.day.maxtemp_c}</h2>
          <h2>Mínimas: {day.day.mintemp_c}</h2>
        </div>
      ))}
    </div>
  );
};


