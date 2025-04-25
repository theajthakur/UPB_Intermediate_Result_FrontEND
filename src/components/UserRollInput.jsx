import React, { useState } from "react";
import Select from "react-select";
import ResultTable from "./ResultTable";
const options = [
  { value: "", label: "Select" },
  { value: "01", label: "AGRA - 01" },
  { value: "06", label: "ALIGARH - 06" },
  { value: "64", label: "AMBEDKAR NAGAR - 64" },
  { value: "65", label: "AMETHI - 65" },
  { value: "22", label: "AMROHA - 22" },
  { value: "43", label: "AURIYA - 43" },
  { value: "62", label: "AYODHYA - 62" },
  { value: "80", label: "AZAMGARH - 80" },
  { value: "13", label: "BAGPAT - 13" },
  { value: "66", label: "BAHRAICH - 66" },
  { value: "82", label: "BALLIA - 82" },
  { value: "69", label: "BALRAMPUR - 69" },
  { value: "51", label: "BANDA - 51" },
  { value: "63", label: "BARABANKI - 63" },
  { value: "26", label: "BAREILLY - 26" },
  { value: "71", label: "BASTI - 71" },
  { value: "88", label: "BHADOHI - 88" },
  { value: "23", label: "BIJNOR - 23" },
  { value: "27", label: "BUDAUN - 27" },
  { value: "09", label: "BULANDSHAHR - 09" },
  { value: "86", label: "CHANDAULI - 86" },
  { value: "52", label: "CHITRAKOOT - 52" },
  { value: "77", label: "DEORIA - 77" },
  { value: "04", label: "ETAH - 04" },
  { value: "41", label: "ETAWAH - 41" },
  { value: "40", label: "FARRUKHABAD - 40" },
  { value: "56", label: "FATEHPUR - 56" },
  { value: "02", label: "FIROZABAD - 02" },
  { value: "11", label: "GAUTAM BUDH NAGAR - 11" },
  { value: "10", label: "GHAZIABAD - 10" },
  { value: "84", label: "GHAZIPUR - 84" },
  { value: "68", label: "GONDA - 68" },
  { value: "75", label: "GORAKHPUR - 75" },
  { value: "49", label: "HAMIRPUR - 49" },
  { value: "14", label: "HAPUR - 14" },
  { value: "33", label: "HARDOI - 33" },
  { value: "07", label: "HATHRAS - 07" },
  { value: "45", label: "JALAUN - 45" },
  { value: "83", label: "JAUNPUR - 83" },
  { value: "47", label: "JHANSI - 47" },
  { value: "42", label: "KANNAUJ - 42" },
  { value: "39", label: "KANPUR DEHAT - 39" },
  { value: "38", label: "KANPUR NAGAR - 38" },
  { value: "08", label: "KASGANJ - 08" },
  { value: "57", label: "KAUSHAMBI - 57" },
  { value: "78", label: "KUSHINAGAR - 78" },
  { value: "31", label: "LAKHIMPUR KHIRI - 31" },
  { value: "48", label: "LALITPUR - 48" },
  { value: "34", label: "LUCKNOW - 34" },
  { value: "76", label: "MAHARAJGANJ - 76" },
  { value: "50", label: "MAHOBA - 50" },
  { value: "03", label: "MAINPURI - 03" },
  { value: "05", label: "MATHURA - 05" },
  { value: "81", label: "MAU - 81" },
  { value: "12", label: "MEERUT - 12" },
  { value: "89", label: "MIRZAPUR - 89" },
  { value: "21", label: "MORADABAD - 21" },
  { value: "15", label: "MUZAFFAR NAGAR - 15" },
  { value: "29", label: "PILIBHIT - 29" },
  { value: "54", label: "PRATAPGARH - 54" },
  { value: "55", label: "PRAYAGRAJ - 55" },
  { value: "36", label: "RAE BARAILI - 36" },
  { value: "24", label: "RAMPUR - 24" },
  { value: "25", label: "SAMBHAL - 25" },
  { value: "72", label: "SANT KABIR NAGAR - 72" },
  { value: "16", label: "SHAHARANPUR - 16" },
  { value: "28", label: "SHAHJAHANPUR - 28" },
  { value: "17", label: "SHAMLI - 17" },
  { value: "67", label: "SHRAWASTI - 67" },
  { value: "73", label: "SIDDHARTA NAGAR - 73" },
  { value: "32", label: "SITAPUR - 32" },
  { value: "90", label: "SONBHADRA - 90" },
  { value: "61", label: "SULTANPUR - 61" },
  { value: "35", label: "UNNAO - 35" },
  { value: "85", label: "VARANASI - 85" },
];

export default function UserRollInput() {
  const [roll, setRoll] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const fetchResult = async () => {
    if (!roll || !selectedOption) return alert("Fill all the fields!");
    const response = await fetch(
      `https://upb-intermediate-result.onrender.com/${roll}`
    );
    const mdata = await response.json();
    setData(mdata);
  };

  return (
    <div className="container mt-5">
      <div className="bg-light p-3">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <input
              type="text"
              value={roll}
              onChange={(event) => {
                setRoll(event.target.value);
              }}
              className="form-control"
              placeholder="Enter Roll Number"
            />
          </div>
          <div className="col-sm-3">
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              isSearchable
              placeholder="Select District"
              className="form-select"
            />
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary w-100" onClick={fetchResult}>
              Search
            </button>
          </div>
        </div>
      </div>
      {data?<ResultTable data={data}/>:""}
    </div>
  );
}
