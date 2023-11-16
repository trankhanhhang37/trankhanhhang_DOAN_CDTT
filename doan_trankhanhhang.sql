-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 16, 2023 lúc 09:58 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `doan_trankhanhhang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `metakey` varchar(1000) NOT NULL,
  `metadesc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `name`, `slug`, `image`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `metakey`, `metadesc`) VALUES
(2, 'Bánh Kem Sinh Nhật 1', 'banh-kem-sinh-nhat-1', 'duahau.jpg', 2, NULL, NULL, '2023-11-15 06:38:15', 1, 1, 1, 'banh kem', 'banh kem'),
(3, 'Bánh Xinh', 'banh-xinh', 'bkdau.jpg', 2, NULL, NULL, '2023-11-15 07:20:39', 1, 1, 1, 'banh kem', 'banh kem'),
(4, 'Bánh Kem ', 'banh kem xinhhh', 'bk3.jpg', 2, 'banh kem sinh nhat', NULL, '2023-10-24 12:17:24', 1, 1, 1, 'banh kem ', 'banh kem'),
(5, 'Bánh Kem 4', 'banh-kem-4', 'banh-kem-4.jpg', 2, NULL, NULL, '2023-11-15 06:47:03', 1, 1, 1, 'banh kem', 'banh kem'),
(6, 'Bánh Kem 5', 'banh kem 5', 'bk1.jpg', 2, 'banh kem sinh nhat', NULL, '2023-10-24 12:17:24', 1, 1, 1, 'banh kem ', 'banh kem'),
(9, 'Bánh Kem Lễ 20-11', 'banh-kem-le-20-11', 'banh-kem-le-20-11.jpg', 0, NULL, '2023-11-15 06:39:54', '2023-11-15 06:39:54', 1, NULL, 1, 'banh kem', 'banh kem');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(1000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `metakey` varchar(1000) NOT NULL,
  `metadesc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `description`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `metakey`, `metadesc`) VALUES
(1, 'Bánh Kem Nhà Làm', 'banh-kem-nha-lam', 'bk2.jpeg', 0, 1, '', NULL, '2023-11-15 07:19:44', 1, 1, 1, 'banh kem', 'aaaa'),
(2, 'Bánh Bắp', 'banh-bap', 'bkdau.jpg', 0, 0, '', NULL, '2023-10-25 06:06:55', 1, 1, 1, 'h', 'h'),
(3, 'Bánh Kem Trứng', 'banh-kem-trung', 'banh-kem-trung.jpg', 0, 0, 'aaaaaaaaaa', NULL, '2023-11-15 07:19:54', 1, 1, 1, 'l', 'l'),
(4, 'Bánh Kem Trái Cây', 'banh-kem-trai-cay', 'banh-kem-trai-cay.jpg', 0, 0, 'aaaa', NULL, '2023-11-15 07:19:07', 1, 1, 1, 'banh kem', 'banh kem'),
(5, 'Bánh Kem Xinh', 'banh-kem-xinh', 'banh-kem-xinh.jpg', 0, 0, 'aaaaaaaaaa', NULL, '2023-11-15 07:07:58', 1, 1, 1, 'l', 'l'),
(6, 'Bánh Kem Thiết Kế', 'banh-kem-thiet-ke', 'banh-kem-thiet-ke.jpg', 0, 0, NULL, '2023-11-13 19:25:54', '2023-11-15 06:47:52', 1, 1, 1, 'banh kem', 'banh kem');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `config`
--

CREATE TABLE `config` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `metadesc` varchar(1000) NOT NULL,
  `metakey` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'h', 'tt', '5421452112', 's', 'dđ', 1, '2023-10-23 09:53:31', '2023-10-23 09:53:31', 1, NULL, 1),
(2, 1, 'x', 'tranhang3726@gmail.com', '3342', 'xxxxxxxxx', 'xxxxxxx', 1, '2023-10-23 10:13:11', '2023-10-23 10:13:11', 1, NULL, 1),
(3, 1, 'ttt', 'ttkkk', '045464113', 'skkk', 'dđkkkkk', 1, '2023-10-23 10:33:45', '2023-10-23 10:33:45', 1, NULL, 1),
(4, 1, 'banh kem', '5442ssssssf', '3342', 'ssssssssss', 'ssssssss', 1, '2023-10-23 10:38:21', '2023-10-23 10:38:21', 1, NULL, 1),
(5, 1, 'Giới Thiệu', 'tranhang3726@gmail.com', '5692534481', 'hhhhhhhhh', 'hhhhhhhhh', 1, '2023-10-23 10:47:55', '2023-10-23 10:47:55', 1, NULL, 1),
(6, 1, 'Giới Thiệu', 'tranhang3726@gmail.com', '04462111', 'bbbbbbbbbb', 'hhhhhhhhhh', 1, '2023-10-23 10:49:05', '2023-10-23 10:49:05', 1, NULL, 1),
(7, 1, 'giay 2', 'khanhang@gmail.com', '345667777', 'rrr', 'rrrrrrrr', 1, '2023-10-23 10:50:43', '2023-10-23 10:50:43', 1, NULL, 1),
(8, 1, 'slider3', 'tranhang3726@gmail.com', '3253636', 'dddđ', 'dddddđ', 1, '2023-10-23 10:52:17', '2023-10-23 10:52:17', 1, NULL, 1),
(11, 1, 'banh kem', '111ttttt', '111', '111', '111', 1, '2023-10-23 11:02:52', '2023-11-13 22:07:09', 1, 1, 1),
(15, 1, 'Khánh Hằng', 'khang37@gmail.com', '0256358964', 'ggf', 'ffff', 1, '2023-11-13 22:07:37', '2023-11-13 22:07:37', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `info`
--

CREATE TABLE `info` (
  `id` int(100) UNSIGNED NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `hotline` varchar(15) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `other_info` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `info`
--

INSERT INTO `info` (`id`, `logo`, `name`, `email`, `address`, `hotline`, `website`, `phone`, `other_info`, `created_at`, `updated_at`, `status`) VALUES
(1, 'aaa', 'aaaaa', 'aaaaaaaa', 'aaaaaaaaaaaa', '353636', 'aaaaaaaaaa', '343536', NULL, '2023-10-26 07:27:15', '2023-10-26 07:37:21', 1),
(2, 'wwq', 'DDAD', 'ADAFCZ', 'ACAFDA', '253636', 'SFSAC', '364474', 'Z', '2023-10-26 07:28:16', '2023-11-14 04:39:18', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu`
--

CREATE TABLE `menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `menu`
--

INSERT INTO `menu` (`id`, `parent_id`, `name`, `link`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `sort_order`, `position`) VALUES
(1, 1, 'ddddddd', 'ddddddddddd', 'dddddd', NULL, NULL, 1, NULL, 1, 2, NULL),
(2, 0, 's', 's', 's', '2023-11-13 21:08:41', '2023-11-13 21:08:42', 1, NULL, 1, NULL, NULL),
(3, 3, 'ssy67567856', 'sss', 'ssss', '2023-11-13 21:14:22', '2023-11-13 21:14:22', 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_05_31_173817_create_brand_table', 1),
(3, '2023_05_31_173913_create_category_table', 1),
(4, '2023_05_31_173952_create_contact_table', 1),
(5, '2023_05_31_174026_create_menu_table', 1),
(6, '2023_05_31_174043_create_order_table', 1),
(7, '2023_05_31_174135_create_product_table', 1),
(8, '2023_05_31_174148_create_post_table', 1),
(9, '2023_05_31_174204_create_slider_table', 1),
(10, '2023_05_31_174216_create_topic_table', 1),
(11, '2023_05_31_174228_create_user_table', 1),
(12, '2023_05_31_213038_create_orderdetail_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `user_id`, `name`, `email`, `phone`, `address`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `gender`) VALUES
(1, 1, 'sf', 'dd', '3456', 'dd', 'dd', '2023-11-13 21:44:44', '2023-11-13 21:44:44', 1, NULL, 1, NULL),
(2, 1, 'khang', 'hnag@gmail.com', '035896241', 'nha tranf', 'nha tranf', '2023-11-15 23:00:14', '2023-11-15 23:00:14', 1, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `price` double(8,2) NOT NULL DEFAULT 1.00,
  `amount` double(8,2) DEFAULT NULL,
  `discount` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pageus`
--

CREATE TABLE `pageus` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` int(11) UNSIGNED DEFAULT 1,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `metakey` varchar(255) DEFAULT NULL,
  `metadesc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `pageus`
--

INSERT INTO `pageus` (`id`, `name`, `title`, `detail`, `slug`, `status`, `image`, `created_at`, `updated_at`, `created_by`, `updated_by`, `sort_order`, `type`, `metakey`, `metadesc`) VALUES
(3, 'Chính sách Vận Chuyển', 'Chính sách Vận Chuyển', '1.    Đối tượng và phạm vi vận chuyển:\r\n\r\nChính sách giao nhận được áp dụng cho tất cả các khách hàng đặt hàng qua website annguy.vn\r\nannguy.vn sẽ thực hiện tất cả các yêu cầu vận chuyển cho khách hàng trên phạm vi toàn quốc\r\n\r\n2.    Hình thức vận chuyển:\r\n\r\nA.    Nhận hàng trực tiếp tại cửa hàng\r\n\r\nVới những khách đến mua hàng tại cửa hàng hoặc thông qua website annguy.vn \r\nQuý khách vui lòng kiểm tra thật kỹ hàng hóa, đối chiếu sản phẩm với chứng từ, phiếu bảo hành trước khi nhận hàng. \r\nTrường hợp hàng hóa phải chuyển từ kho của cửa hàng khác trong cùng hệ thống, nhân viên bán hàng sẽ liên hệ với Quý khách để thương thảo lại về thời gian giao hàng.\r\n\r\nB.    Giao hàng nội thành : khu vực TP.Phan Thiết\r\n\r\nMiễn phí giao hàng trong nội thành cho đơn hàng từ 150.000đ trở lên\r\nPhí giao hàng trong nội thành : 10.000đ cho đơn hàng dưới 150.000đ\r\nNhân viên giao hàng sẽ liên lạc trước với những khách hàng không có yêu cầu về thời gian để sắp xếp thời gian hợp lý với khách hàng.\r\nVới những khách hàng có yêu cầu về thời gian , nhân viên giao hàng sẽ liên lạc và sắp xếp giao đúng giờ khách hàng yêu cầu \r\nTrừ những trường hợp thời gian quá cấp bách, hoặc ngoài thời gian làm việc của cửa hàng, nhân viên sẽ liên lạc và thỏa thuận lại với thời gian của khách hàng cho hợp lý.\r\nQuý khách vui lòng trực tiếp kiểm tra kỹ sản phẩm ngay khi nhận được hàng từ nhân viên giao hàng, nếu có vấn đề liên quan tới chủng loại, mẫu mã, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui lòng báo ngay cho chúng tôi để phối hợp xử lý. Nếu không có bất cứ vấn đề gì, Quý khách vui lòng nhận hàng và thanh toán đầy đủ.\r\nTrường hợp vì một lý do nào đó nhân viên giao hàng không thể giao hàng kịp thời, chúng tôi sẽ liên hệ lại và thông báo cho Quý khách được biết.\r\nC.    Giao hàng liên tỉnh: thông qua đơn vị chuyển phát nhanh, hoặc các nhà xe.\r\n\r\nKhi đặt hàng, Quý khách vui lòng điền đầy đủ và chính xác các thông tin cần thiết theo yêu cầu để tạo điều kiện thuận lợi cho chúng tôi trong việc cung cấp hàng hóa và nhận thanh toán nhanh chóng. Chúng tôi cũng không chịu trách nhiệm đối với những trường hợp giao hàng chậm trễ hay thất lạc vì các thông tin do Quý khách cung cấp không chính xác.\r\nThời gian giao hàng tùy thuộc vào Quý khách lựa chọn chuyển phát nhanh hay chuyển phát thường, thời gian này chỉ mang tính chất tương đối.\r\nChuyển phát thường: Từ 4 đến 8 ngày (không tính Chủ Nhật hoặc những ngày Lễ, Tết).. Phí từ : 30.000đ/đơn hàng.\r\nChuyển phát nhanh: Từ 1 đến 4 ngày (không tính Chủ Nhật hoặc những ngày Lễ, Tết).. Phí từ: 50.000đ/đơn hàng\r\nNhững đơn hàng đặt vào Chủ nhật, ngày nghỉ Lễ, Tết: thời gian giao hàng được tính từ 16 giờ ngày thứ Hai tuần sau hoặc ngày làm việc đầu tiên sau ngày nghỉ Lễ,Tết.\r\nQuý khách vui lòng kiểm tra kỹ hàng hoá ngay khi nhận hàng từ người chuyển phát hàng hoá, nếu có vấn đề liên quan tới chủng loại, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui  báo ngay cho chúng tôi để phối hợp với đơn vị chuyển phát hàng hóa xử lý.\r\nĐồng kiểm đơn hàng: hiện tại đơn vị vận chuyển không áp dụng chính sách đồng kiểm (để tránh mất mát, hư hỏng hàng hóa trong quá trình xem hàng, mở hàng, cũng như quá trình vận chuyển). Quý khách vui lòng tham khảo chính sách đổi trả nếu đơn hàng không đúng như đã đặt.', 'chinh-sach-van-chuyen', 1, 'banh-kem-sinh-nhat-36.jpg', '2023-11-15 11:07:34', '2023-11-15 18:11:03', 1, NULL, 0, 'c', 'c', 'c'),
(4, 'Chính sách Mua Hàng', 'Chính sách Mua Hàng', '1.    Đối tượng và phạm vi vận chuyển:\r\n\r\nChính sách giao nhận được áp dụng cho tất cả các khách hàng đặt hàng qua website annguy.vn\r\nannguy.vn sẽ thực hiện tất cả các yêu cầu vận chuyển cho khách hàng trên phạm vi toàn quốc\r\n\r\n2.    Hình thức vận chuyển:\r\n\r\nA.    Nhận hàng trực tiếp tại cửa hàng\r\n\r\nVới những khách đến mua hàng tại cửa hàng hoặc thông qua website annguy.vn \r\nQuý khách vui lòng kiểm tra thật kỹ hàng hóa, đối chiếu sản phẩm với chứng từ, phiếu bảo hành trước khi nhận hàng. \r\nTrường hợp hàng hóa phải chuyển từ kho của cửa hàng khác trong cùng hệ thống, nhân viên bán hàng sẽ liên hệ với Quý khách để thương thảo lại về thời gian giao hàng.\r\n\r\nB.    Giao hàng nội thành : khu vực TP.Phan Thiết\r\n\r\nMiễn phí giao hàng trong nội thành cho đơn hàng từ 150.000đ trở lên\r\nPhí giao hàng trong nội thành : 10.000đ cho đơn hàng dưới 150.000đ\r\nNhân viên giao hàng sẽ liên lạc trước với những khách hàng không có yêu cầu về thời gian để sắp xếp thời gian hợp lý với khách hàng.\r\nVới những khách hàng có yêu cầu về thời gian , nhân viên giao hàng sẽ liên lạc và sắp xếp giao đúng giờ khách hàng yêu cầu \r\nTrừ những trường hợp thời gian quá cấp bách, hoặc ngoài thời gian làm việc của cửa hàng, nhân viên sẽ liên lạc và thỏa thuận lại với thời gian của khách hàng cho hợp lý.\r\nQuý khách vui lòng trực tiếp kiểm tra kỹ sản phẩm ngay khi nhận được hàng từ nhân viên giao hàng, nếu có vấn đề liên quan tới chủng loại, mẫu mã, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui lòng báo ngay cho chúng tôi để phối hợp xử lý. Nếu không có bất cứ vấn đề gì, Quý khách vui lòng nhận hàng và thanh toán đầy đủ.\r\nTrường hợp vì một lý do nào đó nhân viên giao hàng không thể giao hàng kịp thời, chúng tôi sẽ liên hệ lại và thông báo cho Quý khách được biết.\r\nC.    Giao hàng liên tỉnh: thông qua đơn vị chuyển phát nhanh, hoặc các nhà xe.\r\n\r\nKhi đặt hàng, Quý khách vui lòng điền đầy đủ và chính xác các thông tin cần thiết theo yêu cầu để tạo điều kiện thuận lợi cho chúng tôi trong việc cung cấp hàng hóa và nhận thanh toán nhanh chóng. Chúng tôi cũng không chịu trách nhiệm đối với những trường hợp giao hàng chậm trễ hay thất lạc vì các thông tin do Quý khách cung cấp không chính xác.\r\nThời gian giao hàng tùy thuộc vào Quý khách lựa chọn chuyển phát nhanh hay chuyển phát thường, thời gian này chỉ mang tính chất tương đối.\r\nChuyển phát thường: Từ 4 đến 8 ngày (không tính Chủ Nhật hoặc những ngày Lễ, Tết).. Phí từ : 30.000đ/đơn hàng.\r\nChuyển phát nhanh: Từ 1 đến 4 ngày (không tính Chủ Nhật hoặc những ngày Lễ, Tết).. Phí từ: 50.000đ/đơn hàng\r\nNhững đơn hàng đặt vào Chủ nhật, ngày nghỉ Lễ, Tết: thời gian giao hàng được tính từ 16 giờ ngày thứ Hai tuần sau hoặc ngày làm việc đầu tiên sau ngày nghỉ Lễ,Tết.\r\nQuý khách vui lòng kiểm tra kỹ hàng hoá ngay khi nhận hàng từ người chuyển phát hàng hoá, nếu có vấn đề liên quan tới chủng loại, chất lượng, số lượng hàng hoá không đúng như trong đơn đặt hàng, Quý khách vui  báo ngay cho chúng tôi để phối hợp với đơn vị chuyển phát hàng hóa xử lý.\r\nĐồng kiểm đơn hàng: hiện tại đơn vị vận chuyển không áp dụng chính sách đồng kiểm (để tránh mất mát, hư hỏng hàng hóa trong quá trình xem hàng, mở hàng, cũng như quá trình vận chuyển). Quý khách vui lòng tham khảo chính sách đổi trả nếu đơn hàng không đúng như đã đặt.', 'chinh-sach-mua-hang', 1, 'banh-kem-sinh-nhat-16.jpg', '2023-11-15 11:07:34', '2023-11-15 18:12:52', 1, NULL, 0, 'c', 'c', 'c');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `detail` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `description` varchar(1000) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`id`, `topic_id`, `title`, `slug`, `type`, `detail`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`, `image`, `metakey`, `metadesc`, `sort_order`) VALUES
(11, 2, 'Khuyến Mãi Lễ 20/11', 'khuyen-mai-le-2011', 'đs', '⚠️ Chương trình áp dụng cả Online & Offline. \r\n⚠️ Vì số lượng có hạn nên chương trình có thể kết thúc sớm nếu hết số lượng deal. \r\n⚠️ Chương trình quà tặng hoá đơn không áp dụng đồng thời với các chương trình sale khác và giới hạn mỗi khách/ 1 deal. \r\n📲 Đừng quên Like page và bấm theo dõi để cập nhật các chương trình ưu đãi hấp dẫn tiếp theo nhaaa cả nhà\r\n 😍 #Khuyenmai #Chuongtrinhsale #MungngayNhaGiaoVietNam #20thang11', '2023-11-15 11:20:48', '2023-11-15 11:20:48', 1, NULL, 1, NULL, 'khuyen-mai-le-2011.jpg', 'banh kem', 'dd', 0),
(12, 2, 'Chương Trình Khuyến Mãi', 'chuong-trinh-khuyen-mai', 's', '⚠️ Chương trình áp dụng cả Online & Offline. \r\n⚠️ Vì số lượng có hạn nên chương trình có thể kết thúc sớm nếu hết số lượng deal. \r\n⚠️ Đối với sản phẩm đồng giá 1K & 11K, mỗi khách hàng được mua 1 sản phẩm / 1 deal. \r\n⚠️ Voucher giảm giá không áp dụng đồng thời với chương trình khuyến mãi khác. \r\n⚠️ Khi mua sản phẩm giá sale trong khung giờ, khách hàng có thể chuyển khoản trước để giữ giá sale hoặc Shop sẽ giữ đơn đến trước 22h cùng ngày. \r\n \r\nChị em còn chần giờ gì mà không ghé ngay shop “oanh tạc” thả ga đi ạ!🛍️ 🛒 \r\n#Sieusale #Ngaydoi11_11 #Khunggio #Donggia1k_11K_111K #Muakemdealhot #Voucher', '2023-11-15 11:20:24', '2023-11-15 11:20:24', 1, NULL, 1, NULL, 'chuong-trinh-khuyen-mai.jpg', 's', 's', 0),
(13, 3, 'Tuyển Dụng Nhân Viên Bán Hàng', 'tuyen-dung-nhan-vien-ban-hang', 'd', 'Mô tả công việc:\r\n\r\nNhận hàng từ nhà cung cấp (PO);\r\nSoạn và đóng gói hàng luân chuyển nội bộ cho các chi nhánh theo phiếu đã lên sẵn;\r\nPhụ trách nhận hàng và tập kết hàng hoá khai trương tại kho;\r\nHỗ trợ khai trương chi nhánh mới, kiểm kê bàn giao hàng hoá khai trương;\r\nGiao nhận hàng luân chuyển nội bộ đóng từ kho và các cửa hàng trung chuyển tại kho cho shipper nội bộ/đối tác vận chuyển;\r\nThực hiện 5S hàng ngày tại kho tổng;\r\nXử lý sản phẩm không phù hợp;\r\nGói quà khai trương.', '2023-11-15 11:29:13', '2023-11-15 11:29:13', 1, NULL, 1, NULL, 'tuyen-dung-nhan-vien-ban-hang.jpg', 'd', 'd', 0),
(14, 3, 'Tuyển Dụng Nhân Viên', 'tuyen-dung-nhan-vien', 'a', 'Mô tả công việc:\r\n\r\nLập kế hoạch, triển khai hoạt động bán hàng cho nhân viên tại cửa hàng;\r\nQuản lý hàng hóa: theo dõi đặt hàng, kiểm soát tồn kho, thất thoát;\r\nQuản lý thương mại: trưng bày, luân chuyển hàng hoá, đề xuất CTKM, quản lý hàng hủy;\r\nQuản lý dịch vụ khách hàng: giải quyết khiếu nại, điều chỉnh thái độ phục vụ của nhân viên,..\r\nQuản lý nhân sự: tuyển dụng, đào tạo, sắp xếp lịch làm việc, đánh giá, khen thưởng;\r\nBáo cáo định kỳ cho Quản lý khu vực', '2023-11-15 11:30:42', '2023-11-15 11:30:42', 1, NULL, 1, NULL, 'tuyen-dung-nhan-vien.jpg', 'a', 'a', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` text DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `image` varchar(1000) NOT NULL,
  `price` double NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL DEFAULT 1,
  `updated_by` int(11) DEFAULT NULL,
  `metakey` varchar(1000) NOT NULL,
  `metadesc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `detail`, `description`, `image`, `price`, `status`, `created_at`, `updated_at`, `created_by`, `updated_by`, `metakey`, `metadesc`) VALUES
(8, 1, 2, 'Bánh Kem Sinh Nhật 2', 'Bánh Kem Sinh Nhật 1', 'Bánh kem thiết kế', 'xinhhh', 'sn2.jpg', 250000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(9, 1, 2, 'Bánh Kem Sinh Nhật 3', 'Bánh Kem Sinh Nhật 3', 'Bánh kem thiết kế', 'xinhhh', 'sn3.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(10, 1, 2, 'Bánh Kem Sinh Nhật 4', 'Bánh Kem Sinh Nhật 4', 'Bánh kem thiết kế', 'xinhhh', 'sn4.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(11, 1, 2, 'Bánh Kem Sinh Nhật 5', 'Bánh Kem Sinh Nhật 5', 'Bánh kem thiết kế', 'xinhhh', 'sn5.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(12, 2, 2, 'Bánh Kem Sinh Nhật 6', 'Bánh Kem Sinh Nhật 6', 'Bánh kem thiết kế', 'xinhhh', 'sn6.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(13, 2, 2, 'Bánh Kem Sinh Nhật 7', 'Bánh Kem Sinh Nhật 7', 'Bánh kem thiết kế', 'xinhhh', 'sn7.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(14, 3, 3, 'Bánh Kem Sinh Nhật 8', 'Bánh Kem Sinh Nhật 8', 'Bánh kem thiết kế', 'xinhhh', 'sn8.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(15, 3, 3, 'Bánh Kem Sinh Nhật 9', 'Bánh Kem Sinh Nhật 9', 'Bánh kem thiết kế', 'xinhhh', 'sn9.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(16, 4, 3, 'Bánh Kem Sinh Nhật 10', 'Bánh Kem Sinh Nhật 10', 'Bánh kem thiết kế', 'xinhhh', 'bkdau.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(17, 4, 3, 'Bánh Kem Sinh Nhật 11', 'Bánh Kem Sinh Nhật 10', 'Bánh kem thiết kế', 'xinhhh', 'sn11.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(18, 4, 3, 'Bánh Kem Sinh Nhật 12', 'Bánh Kem Sinh Nhật 12', 'Bánh kem thiết kế', 'xinhhh', 'sn12.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(19, 5, 3, 'Bánh Kem Sinh Nhật 13', 'Bánh Kem Sinh Nhật 13', 'Bánh kem thiết kế', 'xinhhh', 'sn13.jpg', 200000, 1, NULL, NULL, 0, NULL, 'bk ', 'bk'),
(20, 5, 3, 'Bánh Kem Sinh Nhật 14', 'banh-kem-sinh-nhat-14', 'Bánh kem thiết kế', 'xinhhh', 'banh-kem-sinh-nhat-14.jpg', 200000, 1, NULL, '2023-11-15 07:08:43', 0, 1, 'bk', 'bk'),
(22, 1, 4, 'Bánh Kem Sinh Nhật 15', 'banh-kem-sinh-nhat-15', 'banh kem', NULL, 'banh-kem-sinh-nhat-15.jpg', 234000, 1, '2023-11-15 14:09:57', '2023-11-15 07:09:57', 1, 1, 'banh kem', 'banh kem'),
(23, 6, 5, 'Bánh Kem Sinh Nhật 16', 'banh-kem-sinh-nhat-16', '350000', NULL, 'banh-kem-sinh-nhat-16.jpg', 300000, 1, '2023-11-15 14:11:08', '2023-11-15 07:11:08', 1, 1, 'banh kem', 'banh kem'),
(24, 6, 5, 'Bánh Kem Sinh Nhật 17', 'banh-kem-sinh-nhat-17', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-17.jpg', 3000000, 1, '2023-11-15 14:12:21', '2023-11-15 07:12:21', 1, 1, 'banh kem', 'banh kem'),
(25, 3, 3, 'Bánh Kem Sinh Nhật 18', 'banh-kem-sinh-nhat-18', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-18.jpg', 250000, 1, '2023-11-15 14:14:36', '2023-11-15 07:14:36', 1, 1, 'banh kem', 'banh kem'),
(26, 4, 5, 'Bánh Kem Sinh Nhật 19', 'banh-kem-sinh-nhat-19', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-19.jpg', 360000, 1, '2023-11-15 14:15:36', '2023-11-15 07:15:36', 1, 1, 'banh kem', 'banh kem'),
(27, 3, 5, 'Bánh Kem Sinh Nhật 20', 'banh-kem-sinh-nhat-20', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-20.jpg', 350000, 1, '2023-11-15 14:16:50', '2023-11-15 07:16:50', 1, 1, 'banh kem', 'banh kem'),
(28, 5, 4, 'Bánh Kem Sinh Nhật 21', 'banh-kem-sinh-nhat-21', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-21.jpg', 300000, 1, '2023-11-15 14:18:00', '2023-11-15 07:18:00', 1, 1, 'banh kem', 'banh kem'),
(29, 5, 6, 'Bánh Kem Sinh Nhật 29', 'banh-kem-sinh-nhat-29', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-29.jpg', 300000, 1, '2023-11-15 14:52:19', '2023-11-15 07:52:19', 1, 1, 'banh kem', 'banh kem'),
(30, 6, 4, 'Bánh Kem Sinh Nhật 30', 'banh-kem-sinh-nhat-30', 'bánh kem thiết kế', NULL, 'banh-kem-sinh-nhat-30.jpg', 300000, 1, '2023-11-15 14:53:15', '2023-11-15 07:53:15', 1, 1, 'banh kem', 'banh kem'),
(31, 5, 5, 'Bánh Kem Sinh Nhật 31', 'banh-kem-sinh-nhat-31', 'Bánh Kem', NULL, 'banh-kem-sinh-nhat-31.jpg', 300000, 1, '2023-11-15 14:54:12', '2023-11-15 07:54:12', 1, 1, 'banh kem', 'banh kem'),
(32, 6, 6, 'Bánh Kem Sinh Nhật 32', 'banh-kem-sinh-nhat-32', 'Bánh Kem', NULL, 'banh-kem-sinh-nhat-32.jpg', 345000, 1, '2023-11-15 14:54:55', '2023-11-15 07:54:55', 1, 1, 'banh kem', 'banh kem'),
(33, 4, 4, 'Bánh Kem Sinh Nhật 33', 'banh-kem-sinh-nhat-33', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-33.jpg', 200000, 1, '2023-11-15 14:58:55', '2023-11-15 07:58:55', 1, 1, 'banh kem', 'banh kem'),
(34, 6, 6, 'Bánh Kem Sinh Nhật 35', 'banh-kem-sinh-nhat-35', 'Bánh Kem', NULL, 'banh-kem-sinh-nhat-35.jpg', 350000, 1, '2023-11-15 14:59:38', '2023-11-15 08:01:21', 1, 1, 'banh kem', 'banh kem'),
(35, 4, 4, 'Bánh Kem Sinh Nhật 34', 'banh-kem-sinh-nhat-34', 'Bánh Kem Thiết Kế', NULL, 'banh-kem-sinh-nhat-34.jpg', 350000, 1, '2023-11-15 15:00:45', '2023-11-15 08:00:45', 1, 1, 'banh kem', 'banh kem'),
(36, 3, 4, 'Bánh Kem Sinh Nhật 36', 'banh-kem-sinh-nhat-36', 'Bánh Kem', NULL, 'banh-kem-sinh-nhat-36.jpg', 350000, 1, '2023-11-15 15:02:12', '2023-11-15 08:02:12', 1, 1, 'banh kem', 'banh kem'),
(37, 3, 6, 'Bánh Kem Sinh Nhật 37', 'banh-kem-sinh-nhat-37', 'Bánh Kem Sinh Nhật 37', NULL, 'banh-kem-sinh-nhat-37.jpg', 300000, 1, '2023-11-15 15:04:19', '2023-11-15 08:04:19', 1, 1, 'banh kem', 'banh kem'),
(38, 5, 5, 'Bánh Kem Sinh Nhật 38', 'banh-kem-sinh-nhat-38', 'banh kem', NULL, 'banh-kem-sinh-nhat-38.jpg', 350000, 1, '2023-11-15 15:04:57', '2023-11-15 08:05:36', 1, 1, 'banh kem', 'banh kem'),
(39, 4, 4, 'Bánh Kem Sinh Nhật 39', 'banh-kem-sinh-nhat-39', 'banh kem', NULL, 'banh-kem-sinh-nhat-39.jpg', 360000, 1, '2023-11-15 15:07:18', '2023-11-15 08:07:18', 1, 1, 'banh kem', 'banh kem'),
(40, 6, 6, 'Bánh Kem Sinh Nhật 40', 'banh-kem-sinh-nhat-40', 'banh kem', NULL, 'banh-kem-sinh-nhat-40.jpg', 350000, 1, '2023-11-15 15:08:05', '2023-11-15 08:08:05', 1, 1, 'banh kem', 'banh kem'),
(41, 6, 6, 'Bánh Kem Sinh Nhật 41', 'banh-kem-sinh-nhat-41', 'banh kem', NULL, 'banh-kem-sinh-nhat-41.jpg', 360000, 1, '2023-11-15 15:09:43', '2023-11-15 08:09:43', 1, 1, 'banh kem', 'banh kem'),
(42, 6, 6, 'Bánh Kem Sinh Nhật 42', 'banh-kem-sinh-nhat-42', 'banh kem', NULL, 'banh-kem-sinh-nhat-42.jpg', 350000, 1, '2023-11-15 15:10:26', '2023-11-15 08:10:26', 1, 1, 'banh kem', 'banh kem'),
(43, 3, 3, 'Bánh Kem Sinh Nhật 43', 'banh-kem-sinh-nhat-43', 'banh kem', NULL, 'banh-kem-sinh-nhat-43.jpg', 350000, 1, '2023-11-15 15:10:59', '2023-11-15 08:10:59', 1, 1, 'banh kem', 'banh kem'),
(44, 3, 4, 'Bánh Kem Sinh Nhật 44', 'banh-kem-sinh-nhat-44', 'banh kem', NULL, 'banh-kem-sinh-nhat-44.jpg', 350000, 1, '2023-11-15 15:12:37', '2023-11-15 08:12:37', 1, 1, 'banh kem', 'banh kem'),
(45, 2, 2, 'Bánh Kem Sinh Nhật 45', 'banh-kem-sinh-nhat-45', 'banh kem', NULL, 'banh-kem-sinh-nhat-45.jpg', 350000, 1, '2023-11-15 15:13:18', '2023-11-15 08:13:18', 1, 1, 'banh kem', 'banh kem'),
(46, 5, 5, 'Bánh Kem Sinh Nhật 46', 'banh-kem-sinh-nhat-46', 'banh kem', NULL, 'banh-kem-sinh-nhat-46.jpg', 250000, 1, '2023-11-15 15:15:06', '2023-11-15 08:15:06', 1, 1, 'banh kem', 'banh kem');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productsale`
--

CREATE TABLE `productsale` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `sale_id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `quantity_sold` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` bigint(20) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `productsale`
--

INSERT INTO `productsale` (`id`, `product_id`, `sale_id`, `quantity`, `quantity_sold`, `date_begin`, `date_end`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(3, 10, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-09 21:34:04', NULL, NULL, 0, 0, 1),
(4, 15, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-15 21:34:04', NULL, NULL, 0, 0, 1),
(5, 11, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-08 21:34:04', NULL, NULL, 0, 0, 1),
(6, 12, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-20 21:34:04', NULL, NULL, 0, 0, 1),
(7, 13, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-01 21:34:04', NULL, NULL, 0, 0, 1),
(8, 14, 4, 10, 1, '2023-10-19 21:34:04', '2023-12-06 21:34:04', NULL, NULL, 0, 0, 1),
(9, 23, 4, 10, 2, '2023-11-16 05:35:19', '2023-12-09 11:35:19', NULL, NULL, 0, 0, 1),
(10, 34, 4, 10, 3, '2023-11-16 06:28:50', '2023-12-20 12:28:51', NULL, NULL, 0, 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productstore`
--

CREATE TABLE `productstore` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `quantity_sold` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` bigint(20) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `productstore`
--

INSERT INTO `productstore` (`id`, `product_id`, `price`, `quantity`, `quantity_sold`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(5, 8, 200000, 10, 2, NULL, NULL, 1, 1, 1),
(6, 10, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(7, 9, 350000, 10, 2, NULL, NULL, 1, 1, 1),
(8, 11, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(9, 12, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(12, 13, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(13, 14, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(14, 15, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(15, 16, 250000, 10, 2, NULL, NULL, 1, 1, 1),
(16, 17, 200000, 10, 2, NULL, NULL, 1, 1, 1),
(17, 18, 300000, 10, 2, NULL, NULL, 1, 1, 1),
(18, 19, 350000, 10, 2, NULL, NULL, 1, 1, 1),
(19, 20, 250000, 10, 2, '2023-11-15 14:41:02', NULL, 1, 1, 1),
(20, 21, 250000, 10, 2, '2023-11-15 14:41:27', NULL, 1, 1, 1),
(21, 22, 350000, 10, 2, '2023-11-15 14:41:52', NULL, 1, 1, 1),
(22, 23, 350000, 10, 2, '2023-11-15 14:43:31', NULL, 1, 1, 1),
(23, 24, 350000, 10, 2, '2023-11-15 14:43:44', NULL, 1, 1, 1),
(24, 25, 350000, 10, 2, '2023-11-15 14:43:58', NULL, 1, 1, 1),
(25, 26, 300000, 10, 2, '2023-11-15 14:44:17', NULL, 1, 1, 1),
(26, 27, 300000, 10, 2, '2023-11-15 14:44:36', NULL, 1, 1, 1),
(27, 28, 350000, 10, 2, '2023-11-15 14:46:11', NULL, 1, 1, 1),
(28, 29, 350000, 10, 2, '2023-11-15 15:55:47', NULL, 1, 1, 1),
(29, 30, 200000, 10, 2, '2023-11-15 15:56:00', NULL, 1, 1, 1),
(30, 31, 250000, 10, 2, '2023-11-15 15:56:13', NULL, 1, 1, 1),
(31, 32, 350000, 10, 3, '2023-11-15 15:56:28', NULL, 1, 1, 1),
(32, 32, 350000, 10, 2, '2023-11-15 15:56:39', NULL, 1, 1, 1),
(33, 33, 200000, 10, 2, '2023-11-15 15:56:53', NULL, 1, 1, 1),
(34, 34, 350000, 10, 2, '2023-11-15 15:57:05', NULL, 1, 1, 1),
(35, 35, 250000, 10, 2, '2023-11-15 15:57:17', NULL, 1, 1, 1),
(36, 36, 250000, 10, 2, '2023-11-15 16:30:37', NULL, 1, 1, 1),
(37, 37, 350000, 10, 2, '2023-11-15 16:31:04', NULL, 1, 1, 1),
(38, 38, 350000, 10, 2, '2023-11-15 16:31:18', NULL, 1, 1, 1),
(39, 39, 250000, 10, 2, '2023-11-15 16:31:30', NULL, 1, 1, 1),
(40, 40, 200000, 10, 2, '2023-11-15 16:31:43', NULL, 1, 1, 1),
(41, 41, 350000, 10, 2, '2023-11-15 16:31:55', NULL, 1, 1, 1),
(42, 42, 250000, 10, 5, '2023-11-15 16:33:35', NULL, 0, 0, 1),
(43, 43, 250000, 10, 5, '2023-11-15 16:33:56', NULL, 0, 0, 1),
(44, 44, 250000, 10, 5, '2023-11-15 16:34:11', NULL, 1, 1, 1),
(45, 45, 250000, 10, 2, '2023-11-15 16:34:23', NULL, 1, 1, 1),
(46, 46, 350000, 10, 5, '2023-11-15 16:34:37', NULL, 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `rating_score` float NOT NULL,
  `content` text NOT NULL,
  `review_photo` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `product_id`, `customer_id`, `rating_score`, `content`, `review_photo`, `created_at`) VALUES
(2, 3, 1, 3, 'mua lần 2 sản phẩm này ok ok', '', '2023-10-20 09:38:54'),
(3, 4, 2, 5, 'hihihi', '', '2023-10-20 09:38:54'),
(4, 8, 2, 5, 'Bánh rất ngon', '', '2023-10-20 09:38:54'),
(5, 9, 2, 5, 'Bánh rất ngon hehe', '', '2023-10-20 09:38:54'),
(6, 10, 2, 5, 'Bánh rất ngon hihi', '', '2023-10-20 09:38:54'),
(7, 23, 1, 5, 'Bánh Ngon Dẹp', '', '2023-11-15 14:47:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sale_id`
--

CREATE TABLE `sale_id` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `percent_sale` int(11) NOT NULL DEFAULT 0,
  `price_sale` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `sale_id`
--

INSERT INTO `sale_id` (`id`, `name`, `short_description`, `image`, `percent_sale`, `price_sale`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(4, 'sale', NULL, 'aa', 20, 100000, '2023-10-11 12:05:29', '2023-11-16 04:37:52', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slider`
--

CREATE TABLE `slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `description` varchar(1000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `metakey` varchar(1000) DEFAULT NULL,
  `metadesc` varchar(1000) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `slider`
--

INSERT INTO `slider` (`id`, `name`, `link`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `description`, `image`, `metakey`, `metadesc`, `sort_order`) VALUES
(1, 'fd', 'ffd', 'dhjttj', '2023-11-13 21:17:47', '2023-11-13 21:17:47', 1, NULL, 1, NULL, 'fd.jpg', NULL, NULL, 0),
(2, 'fd', 'ffd45667yyyy', 'dhjttj', '2023-11-13 21:41:49', '2023-11-13 21:41:49', 1, NULL, 1, NULL, 'fd.jpg', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `topic`
--

CREATE TABLE `topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `sort_order` int(11) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `topic`
--

INSERT INTO `topic` (`id`, `name`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `sort_order`, `description`) VALUES
(2, 'Chương Trình Ưu Đãi', 'Chương Trình Ưu Đãi', 0, 'khuyen mai', 'khuyen mai', NULL, NULL, 1, NULL, 1, 0, NULL),
(3, 'Tuyển Đồng Đội Mới', 'tuyen-dong-doi-moi', 0, 'Tuyển Đồng Đội Mới', 'Tuyển Đồng Đội Mới', '2023-11-15 11:23:21', '2023-11-15 11:23:21', 1, NULL, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `gender`) VALUES
(1, 'khanhang', 'khanhang@gmail.com', '038622647', 'khanhhang', '123', 'assdf', 'asd', '1', NULL, NULL, 1, NULL, 1, 'men'),
(2, 'hang', 'hang@gmail.com', '1235', NULL, '123', 'nt', 'avt.jpg', '1', '2023-10-19 05:25:55', '2023-10-19 05:25:55', 1, NULL, 1, NULL),
(3, 'khang', 'khanhang@gmail.com', '5692534481', NULL, '2563', 'nha', 'avt.jpg', 'user', '2023-10-19 05:26:00', '2023-10-19 05:26:00', 1, NULL, 1, NULL),
(4, 'e222222', 'sd', '35', 'rtttt5555', 'undefined', 'đ', '.jpg', 'KHACHHANG', '2023-11-13 22:11:38', '2023-11-13 22:11:38', 1, NULL, 1, NULL),
(5, 'asd', 'ưe', '234', 'dd', '23', '3w', NULL, '1', '2023-11-13 22:09:53', '2023-11-13 22:09:53', 1, NULL, 1, NULL),
(6, 'banh kem', 'sss', 'sss', 'sss', 'sss', 'sss', '.jpg', '1', '2023-11-13 22:10:18', '2023-11-13 22:10:18', 1, NULL, 1, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_brand_name_unique` (`name`) USING HASH,
  ADD UNIQUE KEY `db_brand_slug_unique` (`slug`) USING HASH;

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `pageus`
--
ALTER TABLE `pageus`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `productsale`
--
ALTER TABLE `productsale`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `productstore`
--
ALTER TABLE `productstore`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sale_id`
--
ALTER TABLE `sale_id`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `config`
--
ALTER TABLE `config`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `info`
--
ALTER TABLE `info`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `pageus`
--
ALTER TABLE `pageus`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `productsale`
--
ALTER TABLE `productsale`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `productstore`
--
ALTER TABLE `productstore`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `sale_id`
--
ALTER TABLE `sale_id`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `topic`
--
ALTER TABLE `topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
