import React from 'react';
import classNames from "classnames";
import {Delivery, Mail, PaymentPlan, Phone, ReturningCustomer} from "../../components/icons";
import {Card} from "../../components/card";
import {Tag} from "../../components/tag";
import {UserInfoLoader} from "../../components/skeletons";

import avatar from '../../assets/images/Avatar.svg';
import AE from '../../assets/images/AE.svg';
import styles from "./tfo-details.module.scss";

export const UserInfoCard = ({pageData, loading}: any) => {
  return (
    <Card loading={loading} loader={<UserInfoLoader/>}>
      <div className="px-4 mb-3">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <img src={avatar} className="mb-3"/>
          </div>
          <div className="col-2">
            <img src={AE} className="mb-3"/>
          </div>
        </div>
          <h3 className="mb-1">{`${pageData?.user?.first_name} ${pageData?.user?.last_name}`}</h3>
          <div className="pmd co-gray">{pageData?.user?.date_of_birth}</div>
          <div className={classNames(styles.userIcons, 'd-flex co-gray')}>
            <PaymentPlan/>
            <ReturningCustomer/>
            <Delivery/>
          </div>
          <div className={classNames(styles.tags, 'd-flex co-gray my-3')}>
            <Tag className="secondary cut-text text-center">{pageData?.booking?.primary_status}</Tag>
            <Tag className="success cut-text text-center">{pageData?.booking?.secondary_status}</Tag>
          </div>


      </div>
      <hr className="mb-3"/>
      <div className="px-3 primary">
        <div className="d-flex align-items-center">
          <div>
            <div className={styles.userContactIcon}><Phone/></div>
          </div>
          <div className="ms-2">{`+${pageData?.user?.phone_country_code} ${pageData?.user?.phone}`}</div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div>
            <div className={styles.userContactIcon}><Mail/></div>
          </div>
          <div className="ms-2">{`${pageData?.user?.email}`}</div>
        </div>
      </div>
    </Card>
  )
};
