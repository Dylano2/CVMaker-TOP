import {GeneralInformation} from "./GeneralInformation.jsx";
import {Experiences} from "./Experiences.jsx";
import {Formations} from "./Formations.jsx";

export function CVFile(){

    return <>
            <div className={'bg-amber-100 w-[21cm] h-[29.7cm] mx-auto border-black border-4 flex flex-col gap-2 p-2'}>
                <GeneralInformation/>
                <Experiences/>
                <Formations/>
            </div>
    </>
}