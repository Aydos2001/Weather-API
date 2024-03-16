import { TbZoomQuestion } from "react-icons/tb"; 
import { CgSpinner } from "react-icons/cg"; 
import { BsFillCloudHaze2Fill } from "react-icons/bs"
import { FaCompass, FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa"
import { GiDrop } from "react-icons/gi"
import { WeatherTypes } from "../interfaces/WetherTypes"
import IconImage from "./IconImage"

type ContentProps = {
    wetherData: WeatherTypes | null
    isLoading: boolean
}

const Content = (props: ContentProps) => {

    return (
        <>
            {
                props.isLoading ?
                    <div className="p-[15px] h-[300px] flex justify-center items-center rounded-md bg-white mt-6  flex-col gap-6">
                        <div className="text-[40px] flex justify-center items-center gap-2 text-indigo-900">
                            <CgSpinner className="animate-spin"/>
                            <span className="text-[20px]">Loading ...</span>
                        </div>
                    </div>
                    :
                    props.wetherData? 
                    <div className="p-[15px] rounded-md bg-white mt-6 flex flex-col gap-6">
                        <h4 className="text-[20px] text-blue-500">Current weather</h4>
                        <hr />
                        <div className="flex justify-between xs:items-center xs:flex-col md:items-start md:flex-row gap-2">
                            <div className="flex-[1] flex flex-col gap-6">
                                <p className="text-blue-600 text-[18px] font-semibold">{props.wetherData?.name}</p>
                                <div className="flex gap-6">
                                    <IconImage iconData={props.wetherData?.weather[0].icon}/>
                                    <p className="text-[70px] text-blue-900 font-mono">{props.wetherData?.main.temp.toFixed()}°</p>
                                </div>
                                <p className="text-blue-500 font-semibold text-[20px]">{props.wetherData?.weather[0].description}</p>
                            </div>
                            <div className="md:flex-[1] flex gap-4 flex-col font-semibold w-full">
                                <div>
                                    <p className="text-[18px] font-semibold mb-2 text-gray-600">Feels like : <span className="text-blue-400">{props.wetherData?.main.feels_like}°</span></p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex justify-center items-center gap-2 text-gray-600">
                                            <FaLongArrowAltUp />
                                            <span className="text-blue-400">{props.wetherData?.main.temp_max}°</span>
                                        </div>
                                        <div className="flex justify-center items-center gap-2 text-gray-600">
                                            <FaLongArrowAltDown />
                                            <span className="text-blue-400">{props.wetherData?.main.temp_min}°</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 flex-col border-t-[1px] pt-2">
                                    <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                        <GiDrop />
                                        <p>
                                            Humidity
                                        </p>
                                        <span className="text-blue-500">{props.wetherData?.main.humidity}%</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                        <BsFillCloudHaze2Fill />
                                        <p>
                                            Wind
                                        </p>
                                        <span className="text-blue-500">{props.wetherData?.wind.speed}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-[15px]">
                                        <FaCompass />
                                        <p>
                                            Pressure
                                        </p>
                                        <span className="text-blue-500">{props.wetherData?.main.pressure} mPa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    :
                    <div className="text-gray-500 p-4 text-[20px] flex justify-center items-center h-[300px] bg-white rounded-md mt-6">
                        <TbZoomQuestion />
                        <span className="text-[12px] w-[300px] text-center">The city you searched for is not included in the database</span>
                    </div> 
            }
        </>

    )
}

export default Content