import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import appAxios from '../../appAxios.js';
import './DietDetail.scss';

import UserInfo from './components/UserInfo/UserInfo.jsx';
import Image from './components/Image/Image.jsx';
import Content from './components/Content/Content.jsx';

function DietDetail(props) {
  const [UserInfoData, setUserInfoData] = useState(null);
  const [TwitterImage, setTwitterImage] = useState(null);
  const [TwitterContent, setTwitterContent] = useState(null);
  const { setIsShowing } = props;
  const { id } = useParams();

  useEffect(() => {
    appAxios.get(`/getTwitterDetail?twitterId=${id}`).then((result) => {
      setUserInfoData({
        name: result.data.userName,
        gender: result.data.userGender === 1 ? '男' : '女',
        birthday: result.data.userBirthday.slice(0, 10),
      });
      setTwitterImage({
        imagesrc: result.data.imagesrc,
      });
      setTwitterContent({
        title: result.data.title,
        content: result.data.content,
        date: result.data.datetime.slice(0, 10),
        time: result.data.datetime.slice(11, 19),
      });
    });
  }, [id]);

  useEffect(() => {
    if (!UserInfoData || !TwitterContent || !TwitterImage) {
      setIsShowing(true);
      return;
    }
    setIsShowing(false);
  }, [UserInfoData, TwitterImage, TwitterContent, setIsShowing]);

  return (
    <div id="DietDetail">
      <UserInfo {...UserInfoData} />
      <Content {...TwitterContent} />
      <Image {...TwitterImage} />
    </div>
  );
}

export default DietDetail;
