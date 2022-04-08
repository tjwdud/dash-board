import { useState, useEffect } from "react";
import { getRequests } from "api";
import { IRequests } from "types/requestDataType";

function useRequest(
  isConsultationChecked: boolean,
  checkedProcessingMethod: string[],
  checkedMaterial: string[],
) {
  const [loading, setLoading] = useState(false);
  const [serverData, setServerData] = useState([]);
  const [requests, setRequests] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const makeFilterList = () => {
    if (isConsultationChecked) {
      setFilterList([...checkedProcessingMethod, ...checkedMaterial, "상담중"]);
      return;
    }
    setFilterList([...checkedProcessingMethod, ...checkedMaterial]);
  };
  const getRequestData = async () => {
    setLoading(true);
    const data = await getRequests();
    const newData = data.map((request: IRequests) => ({
      ...request,
      filterNeedData: [...request.method, ...request.material, request.status],
    }));
    setServerData(newData);
    setRequests(newData);
    setLoading(false);
  };

  const filterData = () => {
    setRequests(
      serverData?.filter((request) =>
        filterList.every((item) => request.filterNeedData.includes(item)),
      ),
    );
  };

  useEffect(() => {
    getRequestData();
  }, []);

  useEffect(() => {
    makeFilterList();
  }, [isConsultationChecked, checkedProcessingMethod, checkedMaterial]);

  useEffect(() => {
    filterData();
  }, [filterList]);

  return { loading, requests, filterList };
}

export default useRequest;
