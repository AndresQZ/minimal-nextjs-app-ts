import { NextApiRequest, NextApiResponse } from "next";

const XSpaceInfoApiRoute = async (
    _req: NextApiRequest,
    res: NextApiResponse,
  ) => {
        const endpointUrl = `https://api.spacexdata.com/v4/company`;
        try {
          const response = await fetch(endpointUrl,
            {
              method: `GET`,
              headers: {
                'Content-Type': `application/json`,
              },
            },
          );
  
          if (response?.status === 200) {
            const xSpaceInfo =
              await response.json();
            res.status(200).json(xSpaceInfo);
          } else {
             console.warn(`error at endpoint ${endpointUrl}`)
            return res.status(409).json({});
          };
        } catch (error: any) {
          console.error(`error at endpoint: ${endpointUrl}, error: ${error}`);
          return res.status(500).json(error.message);
        }    
  };

  export default XSpaceInfoApiRoute;