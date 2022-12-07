import React, {useEffect, useState} from 'react';
import {ArcElement, Chart as ChartJS} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import classNames from "classnames";

import {getChartData, getColor, getOptions, getPlugins, getWidthColor} from "../../utils/chart";
import {priceFormatter} from "../../utils/formatter";
import {RowItem} from "./row-item";
import {ProgressBar} from "../../components/progress-bar";
import {Warning} from "../../components/icons";
import {Card} from "../../components/card";
import {DetailsCardLoader} from "../../components/skeletons";

import styles from './tfo-details.module.scss';

ChartJS.register(ArcElement);

const options = getOptions()

export const RenewalDetailsCard = ({pageData, loading}: any) => {
  const [progress, setProgress] = useState({color: '', width: 0})
  useEffect(() => {
    if (pageData.booking) {
      const progressValue = getWidthColor(pageData.booking.credit_limit, pageData.booking.credits_used)
      setProgress(progressValue)
    }
  }, [pageData])
  return (
    <Card loading={loading} loader={<DetailsCardLoader/>}>
      <div className="px-4">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <div className="psm co-gray">
              <span
                className={classNames(styles.creditsUsed, progress.color, "plg")}>{priceFormatter(pageData.booking.credits_used)}</span> Credits
              used
            </div>
            <p className="psm co-gray">Carasti limit: {priceFormatter(pageData.booking.credit_limit)}</p>
          </div>
          {progress.color === 'danger' && <div className="col-2"><Warning /></div>}
        </div>
        <ProgressBar className={classNames(progress.color, 'mt-2', 'mb-4')} width={progress.width}/>
        <RowItem label="Rental outstanding:" value={priceFormatter(pageData?.booking?.rental_os)}/>
        <RowItem label="TFO outstanding:" value={priceFormatter(pageData?.booking?.tfo_os)}/>
        <RowItem label="Total outstanding:"
                 value={priceFormatter(pageData?.booking?.rental_os + pageData?.booking?.tfo_os)}/>
      </div>
      <hr className="mb-3"/>
      <div className="px-3">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <Doughnut
              data={getChartData([pageData?.booking?.invoice_ageing])}
              options={options}
              plugins={getPlugins("Ageing", pageData?.booking?.invoice_ageing, "Days")}
            />
            <h6 className="co-gray m-0  text-center">Invoice Ageing</h6>
          </div>
          <div className="col-md-12 col-lg-6">
            <Doughnut
              data={getChartData(getColor(pageData?.booking?.days_untill_renewal).data, getColor(pageData?.booking?.days_untill_renewal).color)}
              options={options}
              plugins={getPlugins("Days", pageData?.booking?.days_untill_renewal, "Days")}
            />
            <h6 className="co-gray m-0 text-center">Until Renewal</h6>
          </div>
        </div>
      </div>
    </Card>
  )
};
