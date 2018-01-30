/*
Navicat MySQL Data Transfer

Source Server         : admin
Source Server Version : 50717
Source Host           : 120.55.186.105:3306
Source Database       : ipzoe-admin

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-30 15:15:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin_menu`
-- ----------------------------
DROP TABLE IF EXISTS `admin_menu`;
CREATE TABLE `admin_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '名称',
  `path` char(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '路径',
  `icon` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '图标',
  `level` tinyint(4) NOT NULL COMMENT '层级',
  `father` tinyint(4) DEFAULT NULL COMMENT '父级ID',
  `order` tinyint(4) DEFAULT NULL COMMENT '排序',
  `dropdown` tinyint(4) NOT NULL COMMENT '是否有下拉列表',
  `is_delete` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='菜单';

-- ----------------------------
-- Records of admin_menu
-- ----------------------------
INSERT INTO `admin_menu` VALUES ('1', '权限管理', '/power', 'zujian', '1', null, '1', '1', null);
INSERT INTO `admin_menu` VALUES ('2', '管理员管理', 'admin', null, '2', '1', null, '0', null);

-- ----------------------------
-- Table structure for `model`
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model
-- ----------------------------

-- ----------------------------
-- Table structure for `role_source`
-- ----------------------------
DROP TABLE IF EXISTS `role_source`;
CREATE TABLE `role_source` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `source_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_source
-- ----------------------------
INSERT INTO `role_source` VALUES ('1', '17', '2', '2017-08-17 20:50:30', '2017-08-17 20:50:30', null);
INSERT INTO `role_source` VALUES ('2', '17', '3', '2017-08-17 20:50:30', '2017-08-17 20:50:30', null);
INSERT INTO `role_source` VALUES ('3', '17', '4', '2017-08-17 20:50:30', '2017-08-17 20:50:30', null);
INSERT INTO `role_source` VALUES ('4', '18', '2', '2017-08-17 20:51:06', '2017-08-17 20:51:06', null);
INSERT INTO `role_source` VALUES ('5', '18', '3', '2017-08-17 20:51:06', '2017-08-17 20:51:06', null);
INSERT INTO `role_source` VALUES ('6', '18', '4', '2017-08-17 20:51:06', '2017-08-17 20:51:06', null);
INSERT INTO `role_source` VALUES ('7', '19', '2', '2017-08-17 20:51:57', '2017-08-17 20:51:57', null);
INSERT INTO `role_source` VALUES ('8', '19', '3', '2017-08-17 20:51:57', '2017-08-17 20:51:57', null);
INSERT INTO `role_source` VALUES ('9', '19', '4', '2017-08-17 20:51:57', '2017-08-17 20:51:57', null);
INSERT INTO `role_source` VALUES ('10', '20', '2', '2017-08-17 20:52:59', '2017-08-17 20:52:59', '2017-08-17 20:56:35');
INSERT INTO `role_source` VALUES ('11', '20', '3', '2017-08-17 20:52:59', '2017-08-17 20:52:59', '2017-08-17 20:56:35');
INSERT INTO `role_source` VALUES ('12', '20', '4', '2017-08-17 20:52:59', '2017-08-17 20:52:59', '2017-08-17 20:56:35');
INSERT INTO `role_source` VALUES ('13', '20', '2', '2017-08-17 20:56:35', '2017-08-17 20:56:35', '2017-08-17 21:32:29');
INSERT INTO `role_source` VALUES ('14', '20', '3', '2017-08-17 20:56:35', '2017-08-17 20:56:35', '2017-08-17 21:32:29');
INSERT INTO `role_source` VALUES ('15', '6', '3', '2017-08-18 18:11:18', '2017-08-18 18:11:18', '2017-08-21 11:09:41');
INSERT INTO `role_source` VALUES ('16', '6', '6', '2017-08-18 18:11:18', '2017-08-18 18:11:18', '2017-08-21 11:09:41');
INSERT INTO `role_source` VALUES ('17', '6', '8', '2017-08-18 18:11:18', '2017-08-18 18:11:18', '2017-08-21 11:09:41');
INSERT INTO `role_source` VALUES ('18', '3', '3', '2017-08-21 14:47:03', '2017-08-21 14:47:03', '2017-08-25 11:42:17');
INSERT INTO `role_source` VALUES ('19', '3', '5', '2017-08-21 14:47:03', '2017-08-21 14:47:03', '2017-08-25 11:42:17');
INSERT INTO `role_source` VALUES ('20', '3', '6', '2017-08-21 14:47:03', '2017-08-21 14:47:03', '2017-08-25 11:42:17');
INSERT INTO `role_source` VALUES ('21', '21', '5', '2017-08-21 15:49:51', '2017-08-21 15:49:51', '2017-08-21 15:53:48');
INSERT INTO `role_source` VALUES ('22', '21', '6', '2017-08-21 15:49:51', '2017-08-21 15:49:51', '2017-08-21 15:53:48');
INSERT INTO `role_source` VALUES ('23', '21', '5', '2017-08-21 15:53:48', '2017-08-21 15:53:48', '2017-08-25 17:16:05');
INSERT INTO `role_source` VALUES ('24', '21', '6', '2017-08-21 15:53:48', '2017-08-21 15:53:48', '2017-08-25 17:16:05');
INSERT INTO `role_source` VALUES ('25', '8', '3', '2017-08-21 15:54:05', '2017-08-21 15:54:05', '2017-08-21 15:54:12');
INSERT INTO `role_source` VALUES ('26', '8', '7', '2017-08-21 15:54:05', '2017-08-21 15:54:05', '2017-08-21 15:54:12');
INSERT INTO `role_source` VALUES ('27', '8', '8', '2017-08-21 15:54:05', '2017-08-21 15:54:05', '2017-08-21 15:54:12');
INSERT INTO `role_source` VALUES ('28', '8', '3', '2017-08-21 15:54:12', '2017-08-21 15:54:12', null);
INSERT INTO `role_source` VALUES ('29', '8', '7', '2017-08-21 15:54:12', '2017-08-21 15:54:12', '2017-08-29 10:54:44');
INSERT INTO `role_source` VALUES ('30', '8', '8', '2017-08-21 15:54:12', '2017-08-21 15:54:12', '2017-08-29 10:54:44');
INSERT INTO `role_source` VALUES ('31', '26', '3', '2017-08-21 15:59:16', '2017-08-21 15:59:16', '2017-08-21 16:00:45');
INSERT INTO `role_source` VALUES ('32', '26', '5', '2017-08-21 15:59:16', '2017-08-21 15:59:16', '2017-08-21 16:00:45');
INSERT INTO `role_source` VALUES ('33', '26', '6', '2017-08-21 15:59:16', '2017-08-21 15:59:16', '2017-08-21 16:00:45');
INSERT INTO `role_source` VALUES ('34', '27', '4', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');
INSERT INTO `role_source` VALUES ('35', '27', '5', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');
INSERT INTO `role_source` VALUES ('36', '27', '6', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');
INSERT INTO `role_source` VALUES ('37', '27', '7', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');
INSERT INTO `role_source` VALUES ('38', '27', '8', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');
INSERT INTO `role_source` VALUES ('39', '1', '2', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('40', '1', '3', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('41', '1', '4', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('42', '1', '5', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('43', '1', '6', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('44', '1', '7', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('45', '1', '8', '2017-08-21 17:08:04', '2017-08-21 17:08:04', '2017-08-22 10:02:34');
INSERT INTO `role_source` VALUES ('46', '1', '3', '2017-08-22 10:02:34', '2017-08-22 10:02:34', '2017-09-06 16:51:28');
INSERT INTO `role_source` VALUES ('47', '1', '5', '2017-08-22 10:02:34', '2017-08-22 10:02:34', '2017-09-06 16:51:28');
INSERT INTO `role_source` VALUES ('48', '1', '6', '2017-08-22 10:02:34', '2017-08-22 10:02:34', '2017-09-06 16:51:28');
INSERT INTO `role_source` VALUES ('49', '3', '3', '2017-08-25 11:42:17', '2017-08-25 11:42:17', null);
INSERT INTO `role_source` VALUES ('50', '3', '5', '2017-08-25 11:42:17', '2017-08-25 11:42:17', '2017-09-08 18:56:51');
INSERT INTO `role_source` VALUES ('51', '3', '6', '2017-08-25 11:42:17', '2017-08-25 11:42:17', null);
INSERT INTO `role_source` VALUES ('52', '1', '3', '2017-09-06 16:51:28', '2017-09-06 16:51:28', null);
INSERT INTO `role_source` VALUES ('53', '1', '5', '2017-09-06 16:51:28', '2017-09-06 16:51:28', '2017-09-08 18:56:51');
INSERT INTO `role_source` VALUES ('54', '1', '6', '2017-09-06 16:51:28', '2017-09-06 16:51:28', null);
INSERT INTO `role_source` VALUES ('55', '1', '28', '2017-09-06 16:51:28', '2017-09-06 16:51:28', null);
INSERT INTO `role_source` VALUES ('56', '11', '2', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('57', '11', '3', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('58', '11', '4', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('59', '11', '5', '2017-09-08 14:16:06', '2017-09-08 14:16:06', '2017-09-08 18:56:51');
INSERT INTO `role_source` VALUES ('60', '11', '6', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('61', '11', '7', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('62', '11', '8', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('63', '11', '28', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('64', '11', '29', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('65', '11', '30', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('66', '11', '31', '2017-09-08 14:16:06', '2017-09-08 14:16:06', null);
INSERT INTO `role_source` VALUES ('67', '12', '5', '2017-09-08 18:55:45', '2017-09-08 18:55:45', '2017-09-08 18:56:51');
INSERT INTO `role_source` VALUES ('68', '12', '6', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('69', '12', '7', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('70', '12', '8', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('71', '12', '28', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('72', '12', '29', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('73', '12', '30', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);
INSERT INTO `role_source` VALUES ('74', '12', '31', '2017-09-08 18:55:45', '2017-09-08 18:55:45', null);

-- ----------------------------
-- Table structure for `roles`
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` int(11) DEFAULT '1',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', 'root', '1', '超级管理员', '2017-08-17 17:06:23', '2017-09-06 16:51:28', null);
INSERT INTO `roles` VALUES ('3', 'admin', '1', '管理员', '2017-08-17 17:06:49', '2017-08-25 11:42:17', null);
INSERT INTO `roles` VALUES ('5', 'admin1', '1', '管理员', '2017-08-17 17:07:00', '2017-08-17 17:07:00', '2017-08-21 11:08:27');
INSERT INTO `roles` VALUES ('6', 'admin12', '1', '管理员', '2017-08-17 20:09:35', '2017-08-18 18:11:18', '2017-08-21 11:09:41');
INSERT INTO `roles` VALUES ('8', 'admin123', '1', '管理', '2017-08-17 20:10:35', '2017-08-21 15:54:12', null);
INSERT INTO `roles` VALUES ('9', 'admin1234', '1', '管理员', '2017-08-17 20:11:34', '2017-08-17 20:11:34', null);
INSERT INTO `roles` VALUES ('10', 'admin124', '1', '管理员', '2017-08-17 20:15:11', '2017-08-17 20:15:11', null);
INSERT INTO `roles` VALUES ('11', 'admin1245', '1', '管理员', '2017-08-17 20:24:12', '2017-09-08 14:16:06', null);
INSERT INTO `roles` VALUES ('12', 'admin12435', '1', '管理员', '2017-08-17 20:26:48', '2017-09-08 18:55:45', null);
INSERT INTO `roles` VALUES ('13', 'admin124335', '1', '管理员', '2017-08-17 20:31:11', '2017-08-17 20:31:11', null);
INSERT INTO `roles` VALUES ('14', 'admin1243335', '1', '管理员', '2017-08-17 20:45:20', '2017-08-17 20:45:20', null);
INSERT INTO `roles` VALUES ('15', 'admin6666', '1', '管理员', '2017-08-17 20:45:29', '2017-08-17 20:45:29', null);
INSERT INTO `roles` VALUES ('16', 'admin11', '1', '管理员', '2017-08-17 20:48:56', '2017-08-17 20:48:56', null);
INSERT INTO `roles` VALUES ('17', 'admin113', '1', '管理员', '2017-08-17 20:50:30', '2017-08-17 20:50:30', null);
INSERT INTO `roles` VALUES ('18', 'admin1133', '1', '管理员', '2017-08-17 20:51:06', '2017-08-17 20:51:06', null);
INSERT INTO `roles` VALUES ('19', 'admin1233', '1', '管理员', '2017-08-17 20:51:57', '2017-08-17 20:51:57', null);
INSERT INTO `roles` VALUES ('20', 'admin1533', '1', '管理员', '2017-08-17 20:52:59', '2017-08-17 20:56:35', '2017-08-17 21:32:29');
INSERT INTO `roles` VALUES ('21', 'newAdmin', '1', 'aaa', '2017-08-21 15:49:51', '2017-08-21 15:53:48', '2017-08-25 17:16:05');
INSERT INTO `roles` VALUES ('26', 'adminnnn', '1', null, '2017-08-21 15:59:16', '2017-08-21 15:59:16', '2017-08-21 16:00:45');
INSERT INTO `roles` VALUES ('27', 'emmmmm', '1', 'emmm', '2017-08-21 16:01:06', '2017-08-21 16:01:06', '2017-08-25 17:08:40');

-- ----------------------------
-- Table structure for `source`
-- ----------------------------
DROP TABLE IF EXISTS `source`;
CREATE TABLE `source` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` int(11) DEFAULT '0',
  `father` int(11) DEFAULT '0',
  `order` int(11) DEFAULT NULL,
  `dropdown` tinyint(1) DEFAULT NULL,
  `type` int(11) DEFAULT '0' COMMENT '0=模块，1=页面，2=button',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of source
-- ----------------------------
INSERT INTO `source` VALUES ('2', '权限管理', '/power', 'fa fa-key', '0', '0', '1', '1', '0', '2017-08-16 16:38:27', '2017-09-11 17:03:14', null);
INSERT INTO `source` VALUES ('3', '管理员管理', 'admin', null, '1', '2', '3', '0', '1', '2017-08-17 09:47:34', '2017-09-11 17:03:14', null);
INSERT INTO `source` VALUES ('4', '角色管理', 'role', '', '1', '2', '2', '0', '1', '2017-08-17 09:52:09', '2017-09-11 17:03:14', null);
INSERT INTO `source` VALUES ('5', '菜单管理', '/menuCtrl', 'fa fa-th-list', '0', '0', '2', '0', '0', '2017-08-17 09:54:33', '2017-08-17 09:54:33', null);
INSERT INTO `source` VALUES ('6', '菜单管理', '', '', '1', '5', '1', '0', '1', '2017-08-17 09:55:53', '2017-08-17 09:55:53', null);
INSERT INTO `source` VALUES ('7', '组件', '/components', 'fa fa-align-left', '0', '0', '3', '1', '0', '2017-08-17 09:56:12', '2017-09-11 17:16:30', null);
INSERT INTO `source` VALUES ('8', '富文本编辑器', 'tinymce', null, '1', '7', '4', '0', '1', '2017-08-17 09:56:13', '2017-09-11 17:16:30', null);
INSERT INTO `source` VALUES ('24', '富文本编辑器', 'tinymce', null, '1', '7', '1', '0', '1', '2017-08-17 09:56:13', '2017-08-29 15:28:57', '2017-08-29 15:37:30');
INSERT INTO `source` VALUES ('26', '图片上传', 'upload', null, '1', '7', '1', '0', '1', '2017-08-29 15:09:25', '2017-08-29 15:28:57', '2017-08-29 15:37:30');
INSERT INTO `source` VALUES ('27', '图片上传', 'upload', null, '1', '7', '1', '0', '1', '2017-08-29 15:11:20', '2017-08-29 15:37:30', '2017-08-29 15:37:49');
INSERT INTO `source` VALUES ('28', '图片上传', 'upload', null, '1', '7', '2', '0', '1', '2017-08-29 15:37:49', '2017-09-11 17:16:30', null);
INSERT INTO `source` VALUES ('29', '表单', 'form', null, '1', '7', '3', '0', '1', '2017-09-06 15:24:16', '2017-09-11 17:16:30', null);
INSERT INTO `source` VALUES ('30', '用户管理', '/menuCtrl', '111', '0', '0', '4', '0', '0', '2017-09-08 13:57:13', '2017-09-11 17:41:23', null);
INSERT INTO `source` VALUES ('31', '用户管理', '1', null, '1', '30', '1', '0', '1', '2017-09-08 13:57:13', '2017-09-11 17:41:23', null);

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT '1' COMMENT '0=已冻结，1=正常',
  `level` int(11) DEFAULT '1',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `user_user_name_unique` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=634 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'root', 'root', '超级管理员', null, '1', '0', '2017-08-16 14:06:23', '2017-09-22 17:01:47', null);
INSERT INTO `user` VALUES ('42', 'adminmm', '123456', '111', null, '1', '1', '2017-08-16 17:01:43', '2017-08-25 16:53:12', null);
INSERT INTO `user` VALUES ('43', 'admin2', '123456', null, null, '0', '1', '2017-08-16 17:01:48', '2017-09-06 16:50:34', null);
INSERT INTO `user` VALUES ('134', 'string', '123456', '123456', 'string', '1', '1', '2017-08-17 13:52:35', '2017-08-25 13:47:31', null);
INSERT INTO `user` VALUES ('394', 'aadm', '123456', 'aaam', null, '1', '1', '2017-08-25 17:24:17', '2017-08-25 17:24:17', null);
INSERT INTO `user` VALUES ('396', 'adminn/*396*/', '123', null, null, '1', '1', '0000-00-00 00:00:00', '2017-08-25 18:06:42', '2017-08-25 18:06:42');
INSERT INTO `user` VALUES ('415', 'adminn', 'root', null, null, '1', '1', '2017-08-25 18:07:30', '2017-08-25 18:07:30', null);
INSERT INTO `user` VALUES ('612', ' zzz', '123456', 'zzz', null, '1', '1', '2017-09-08 14:15:06', '2017-09-08 18:56:03', null);

-- ----------------------------
-- Table structure for `user_role`
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('6', '275', '1', '2017-08-18 10:30:33', '2017-08-18 10:30:33', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('7', '275', '3', '2017-08-18 10:30:33', '2017-08-18 10:30:33', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('8', '275', '5', '2017-08-18 10:30:33', '2017-08-18 10:30:33', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('9', '275', '6', '2017-08-18 10:30:33', '2017-08-18 10:30:33', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('10', '275', '8', '2017-08-18 10:30:33', '2017-08-18 10:30:33', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('11', '275', '6', '2017-08-18 10:36:37', '2017-08-18 10:36:37', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('12', '275', '8', '2017-08-18 10:36:37', '2017-08-18 10:36:37', '2017-08-18 10:41:55');
INSERT INTO `user_role` VALUES ('13', '275', '6', '2017-08-18 10:41:56', '2017-08-18 10:41:56', '2017-08-21 11:09:41');
INSERT INTO `user_role` VALUES ('14', '275', '17', '2017-08-18 10:41:56', '2017-08-18 10:41:56', '2017-08-25 17:13:04');
INSERT INTO `user_role` VALUES ('15', '1', '1', '2017-08-21 16:59:48', '2017-08-21 16:59:48', '2017-08-21 17:05:26');
INSERT INTO `user_role` VALUES ('16', '1', '3', '2017-08-21 16:59:48', '2017-08-21 16:59:48', '2017-08-21 17:05:26');
INSERT INTO `user_role` VALUES ('17', '1', '1', '2017-08-21 17:05:26', '2017-08-21 17:05:26', '2017-08-21 17:06:09');
INSERT INTO `user_role` VALUES ('18', '1', '3', '2017-08-21 17:05:26', '2017-08-21 17:05:26', '2017-08-21 17:06:09');
INSERT INTO `user_role` VALUES ('19', '1', '9', '2017-08-21 17:05:26', '2017-08-21 17:05:26', '2017-08-21 17:06:09');
INSERT INTO `user_role` VALUES ('20', '1', '1', '2017-08-21 17:06:09', '2017-08-21 17:06:09', '2017-08-21 17:06:46');
INSERT INTO `user_role` VALUES ('21', '1', '3', '2017-08-21 17:06:09', '2017-08-21 17:06:09', '2017-08-21 17:06:46');
INSERT INTO `user_role` VALUES ('22', '1', '1', '2017-08-21 17:06:46', '2017-08-21 17:06:46', '2017-08-21 17:08:54');
INSERT INTO `user_role` VALUES ('23', '1', '3', '2017-08-21 17:06:46', '2017-08-21 17:06:46', '2017-08-21 17:08:54');
INSERT INTO `user_role` VALUES ('24', '1', '9', '2017-08-21 17:06:46', '2017-08-21 17:06:46', '2017-08-21 17:08:54');
INSERT INTO `user_role` VALUES ('25', '1', '1', '2017-08-21 17:08:54', '2017-08-21 17:08:54', null);
INSERT INTO `user_role` VALUES ('26', '1', '3', '2017-08-21 17:08:54', '2017-08-21 17:08:54', null);
INSERT INTO `user_role` VALUES ('27', '42', '3', '2017-08-25 11:40:19', '2017-08-25 11:40:19', '2017-08-25 11:42:01');
INSERT INTO `user_role` VALUES ('28', '42', '3', '2017-08-25 11:42:01', '2017-08-25 11:42:01', null);
INSERT INTO `user_role` VALUES ('29', '394', '3', '2017-08-25 17:24:17', '2017-08-25 17:24:17', null);
INSERT INTO `user_role` VALUES ('30', '612', '12', '2017-09-08 14:15:06', '2017-09-08 14:15:06', '2017-09-08 18:55:14');
INSERT INTO `user_role` VALUES ('31', '612', '3', '2017-09-08 18:55:14', '2017-09-08 18:55:14', '2017-09-08 18:56:03');
INSERT INTO `user_role` VALUES ('32', '612', '8', '2017-09-08 18:55:14', '2017-09-08 18:55:14', '2017-09-08 18:56:03');
INSERT INTO `user_role` VALUES ('33', '612', '12', '2017-09-08 18:55:14', '2017-09-08 18:55:14', '2017-09-08 18:56:03');
INSERT INTO `user_role` VALUES ('34', '612', '3', '2017-09-08 18:56:03', '2017-09-08 18:56:03', null);
INSERT INTO `user_role` VALUES ('35', '612', '8', '2017-09-08 18:56:03', '2017-09-08 18:56:03', null);
INSERT INTO `user_role` VALUES ('36', '612', '12', '2017-09-08 18:56:03', '2017-09-08 18:56:03', null);
