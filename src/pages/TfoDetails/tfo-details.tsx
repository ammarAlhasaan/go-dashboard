import React, {useEffect, useState} from 'react';
import styles from './tfo-details.module.scss';
import {Button} from "../../components/button";
import classNames from "classnames";

import data from "./data.json"
import {dateFormatter, priceFormatter} from "../../utils/formatter";
import {RowItem} from "./row-item";
import {RenewalDetailsCard} from "./renewal-details-card";
import {Insurance, Tyre, UserManagement, UserPlus, Windscreen} from "../../components/icons";
import {UserInfoCard} from "./user-info-card";
import {Card} from "../../components/card";
import {DetailsCardLoader} from "../../components/skeletons";


const tabs: any = [
  {text: 'Contest', key: 'contest'},
  {text: 'Debt collection', key: 'debt-collection'},
  {text: 'Bad debt', key: 'bad-debt'},
  {text: 'Waive', key: 'waive'},
  {text: 'Refund', key: 'refund'},
]

export const TfoDetails = ({}: any) => {
  const [pageData, setPageData] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [tab, setTab] = useState('refund')

  useEffect(() => {
    setLoading(true);
    setPageData(data)
  }, [])

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [pageData])

  return (
    <div className={styles.Tfo}>
      <div className="row mb-3">
        <div className="col-md-3">
          <h2>TFO Details</h2>
        </div>
        <div className="col d-flex d-lg-block">
          <div className={classNames(styles.tabs, 'd-flex flex-wrap justify-content-end')}>
            {tabs.map((tabItem: any) => <Button
              className={styles.tabButton}
              onClick={() => setTab(tabItem.key)}
              importance={tab === tabItem.key ? 'filled' : 'line'}
              key={tabItem.key}>
              {tabItem.text}
            </Button>)}

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
          <UserInfoCard loading={loading} pageData={pageData}/>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
          <Card loading={loading} loader={<DetailsCardLoader/>}>
            <div className="px-3">
              <h3 className="mb-4">Customer details</h3>
              <RowItem label="Deposit:" value={priceFormatter(pageData?.booking?.deposit)}/>
              <RowItem label="Wallet Balance:" value={priceFormatter(pageData?.user?.wallet_balance)}/>
              <RowItem label="CAC:" value={priceFormatter(pageData?.user?.cac)}/>
              <RowItem label="PRN:" value={priceFormatter(pageData?.user?.prn)}/>
              <RowItem label="LTV:" value={priceFormatter(pageData?.user?.ltv)}/>
              <RowItem label="Reference:" value={pageData?.booking?.reference}/>
              <RowItem label="Sign up:" value={dateFormatter(pageData?.user?.sign_up_date)}/>
              <RowItem label="Source:" value={pageData?.user?.sign_up_source}/>
            </div>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
          <Card loading={loading} loader={<DetailsCardLoader/>}>
            <div className="px-3">
              <h3 className="mb-4">Booking details</h3>
              <RowItem label="Car:" value={`${pageData?.booking?.car_make}, ${pageData?.booking?.car_model}`}/>
              <RowItem label="Booking date:" value={dateFormatter(pageData?.booking?.booking_date)}/>
              <RowItem label="Booking type:" value={pageData?.booking?.booking_type}/>
              <RowItem label="Start date:" value={dateFormatter(pageData?.booking?.start_date)}/>
              <RowItem label="End date:" value={dateFormatter(pageData?.booking?.end_date)}/>
              <RowItem label="Price:" value={priceFormatter(pageData?.booking?.price)}/>
              <RowItem label="Partner:" value={pageData?.booking?.partner_name}/>
              <RowItem label="Insurance:" value={<div className={classNames(styles.insurance, 'd-flex')}>
                <Insurance className="co-green"/>
                <UserPlus/>
                <Tyre className="co-green"/>
                <UserManagement/>
                <Windscreen/>
              </div>}/>
            </div>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
          {pageData?.booking && <RenewalDetailsCard loading={loading} pageData={pageData}/>}
        </div>
      </div>
    </div>
  )
};
