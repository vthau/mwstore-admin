import { useState, useEffect } from "react";
import moment from "moment";
import toast from "../helpers/toast";
import axiosClient from "../apis/axiosClient";

function useDownload(path, fileName = "downloadFile", extension = "xlsx") {
  const [isLoading, setIsLoading] = useState(false);
  const [initFetch, setInitFetch] = useState(true);
  const [linkFile, setLinkFile] = useState();

  const initFileDownload = () => {
    if (path !== "") {
      axiosClient
        .get(path, {
          responseType: "blob",
        })
        .then((blob) => {
          const timeExport = moment(new Date())
            .format("H_mm_ss_DD_MM_YYYY")
            .toString();
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            `${fileName}_${timeExport}.${extension}`
          );
          document.body.appendChild(link);
          setLinkFile(link);
          setInitFetch(false);
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    initFileDownload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const downloadFile = async () => {
    await setIsLoading(true);
    await initFileDownload();

    try {
      linkFile.click();
      linkFile.parentNode.removeChild(linkFile);
    } catch (error) {
      return toast.error("Fail", "Download file fail");
    }

    setTimeout(() => {
      setIsLoading(false);
      return toast.success("Success", "Download file success");
    }, 500);
  };

  return [downloadFile, isLoading, initFetch];
}

export default useDownload;
