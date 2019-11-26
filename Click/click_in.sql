-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2019-11-26 04:51:28
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `click_in`
--

-- --------------------------------------------------------

--
-- 表的结构 `click_goal`
--

CREATE TABLE `click_goal` (
  `gid` int(11) NOT NULL,
  `gname` varchar(50) DEFAULT NULL,
  `imgName` varchar(50) DEFAULT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `clickStartTime` time DEFAULT NULL,
  `alarmTime` time DEFAULT NULL,
  `isClick` tinyint(1) DEFAULT NULL,
  `clickEndTime` time DEFAULT NULL,
  `uname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `click_goal`
--

INSERT INTO `click_goal` (`gid`, `gname`, `imgName`, `startDate`, `endDate`, `clickStartTime`, `alarmTime`, `isClick`, `clickEndTime`, `uname`) VALUES
(71, '深蹲', './imgs/shendun.png', '2019-09-01', '0000-00-00', '00:00:00', '00:00:00', 1, '00:00:00', 'dagouzi'),
(72, '瑜伽', './imgs/tiaowu.png', '2019-08-01', '2019-11-01', '04:13:21', '09:12:12', 1, '13:18:30', 'dagouzi'),
(73, '护肤', './imgs/hufu.png', '2019-09-01', '2019-10-01', '00:00:00', '00:00:00', 0, '00:00:00', 'dagouzi'),
(74, '深蹲', './imgs/shendun.png', '2019-09-01', '2019-10-01', '00:00:00', '00:00:00', 0, '00:00:00', 'dagouzi'),
(75, '深蹲', './imgs/shendun.png', '2019-09-01', '2019-10-01', '00:00:00', '15:22:06', 0, '00:00:00', 'dagouzi'),
(76, '瑜伽', './imgs/tiaowu.png', '2019-10-01', '2019-10-03', '16:43:39', '16:43:36', 0, '23:43:40', 'hwhwhw'),
(78, '健身操', './imgs/jianshencao.png', '2019-09-01', '2019-10-01', '00:00:00', '00:00:00', 0, '00:00:00', 'hwhwhw'),
(79, '深蹲', './imgs/shendun.png', '2019-09-01', '2019-12-01', '15:14:08', '15:14:05', 0, '15:15:11', 'asdd'),
(80, '健身操', './imgs/jianshencao.png', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', 0, '00:00:00', 'cindy'),
(81, '健身操', './imgs/jianshencao.png', '2019-09-01', '2019-12-01', '16:17:03', '16:17:01', 0, '23:17:05', 'cindy'),
(82, '瑜伽', './imgs/tiaowu.png', '2019-09-01', '2019-01-01', '16:19:07', '17:19:03', 0, '22:19:09', 'cindy'),
(83, '瑜伽', './imgs/tiaowu.png', '2019-09-01', '2019-12-01', '00:00:00', '00:00:00', 0, '00:00:00', 'cindy'),
(84, '羽毛球', './imgs/yumaoqiu.png', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', 0, '00:00:00', 'cindy'),
(85, '滑板', './imgs/huaban.png', '2019-09-01', '0000-00-00', '00:00:00', '00:00:00', 0, '00:00:00', 'cindy'),
(86, '滑板', './imgs/huaban.png', '2019-09-01', '2019-10-01', '16:19:57', '16:19:55', 0, '16:19:58', 'cindy'),
(87, '滑板', './imgs/huaban.png', '2019-09-01', '2019-10-01', '13:20:14', '16:20:13', 0, '22:20:17', 'cindy'),
(88, '羽毛球', './imgs/yumaoqiu.png', '2019-12-01', '2019-12-10', '16:20:47', '16:20:45', 0, '23:20:50', 'cindy'),
(89, '篮球', './imgs/lanqiu.png', '2019-09-01', '2019-01-01', '07:22:44', '13:22:41', 0, '23:22:50', 'cindy'),
(90, '护肤', './imgs/hufu.png', '2019-09-01', '2021-01-01', '16:24:45', '16:24:41', 0, '18:24:47', 'cindy'),
(91, '跑步', './imgs/paobu.png', '2019-09-01', '2019-12-01', '11:25:11', '16:25:10', 0, '19:25:20', 'cindy'),
(92, '吃早餐', './imgs/chizaocan.png', '2019-09-01', '2019-11-01', '16:22:44', '16:25:42', 0, '23:25:48', 'cindy'),
(93, '羽毛球', './imgs/yumaoqiu.png', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', 0, '00:00:00', 'cindy'),
(94, '羽毛球', './imgs/yumaoqiu.png', '2019-09-01', '2019-10-01', '14:26:27', '16:26:23', 0, '16:26:25', 'cindy'),
(95, '篮球', './imgs/lanqiu.png', '2019-09-01', '2019-12-01', '08:23:54', '19:26:49', 0, '19:27:01', 'cindy'),
(96, '羽毛球', './imgs/yumaoqiu.png', '2019-06-01', '2019-12-01', '07:27:32', '10:27:26', 0, '21:27:40', 'cindy'),
(97, '羽毛球', './imgs/yumaoqiu.png', '2019-09-01', '2019-12-01', '16:28:16', '16:29:11', 0, '16:30:18', 'cindy');

-- --------------------------------------------------------

--
-- 表的结构 `click_user`
--

CREATE TABLE `click_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(50) DEFAULT NULL,
  `upwd` varchar(50) DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(50) DEFAULT NULL,
  `registerDate` datetime DEFAULT NULL,
  `age` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `click_user`
--

INSERT INTO `click_user` (`uid`, `uname`, `upwd`, `sex`, `phoneNumber`, `registerDate`, `age`) VALUES
(1, 'zhangsan', '123456', '0', '13325498998', '0000-00-00 00:00:00', 0),
(2, 'dingding', '123456', '0', '12345678910', '2019-09-11 20:30:53', 0),
(3, 'dudu', '123456', '0', '123456', '2019-09-16 11:14:07', 0),
(4, 'cindy', '123456', '0', '18720011035', '2019-09-20 14:49:51', 8),
(5, 'heihei', '123456', '1', '', '2019-09-24 13:02:29', 8),
(6, 'dagouzi', '123456', '1', '15478965336', '2019-09-24 13:09:53', 12),
(7, '', '123456', '选择', '', '2019-09-24 13:28:07', 0),
(8, 'cicicici', '123456', '0', '15244447777', '2019-09-24 14:59:21', 12),
(9, 'hwhwhw', '123456', '0', '13455665566', '2019-09-24 16:43:03', 12),
(10, 'asdd', '123456', '1', '18754455698', '2019-10-24 15:12:55', 14),
(11, 'xiaoliu', '222222', '0', '14322332233', '2019-11-26 11:26:57', 13),
(12, 'sisi', '111111', '0', '14399990000', '2019-11-26 11:50:57', 33);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `click_goal`
--
ALTER TABLE `click_goal`
  ADD PRIMARY KEY (`gid`);

--
-- Indexes for table `click_user`
--
ALTER TABLE `click_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `click_goal`
--
ALTER TABLE `click_goal`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
--
-- 使用表AUTO_INCREMENT `click_user`
--
ALTER TABLE `click_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
