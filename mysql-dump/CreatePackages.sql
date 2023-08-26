CREATE TABLE IF NOT EXISTS `Packages` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TrackingNo` varchar(45) DEFAULT NULL,
  `OwnerId` int(11) DEFAULT NULL,
  `RoomId` int(11) DEFAULT NULL,
  `isRecieved` tinyint(4) NOT NULL DEFAULT '0',
  `CreatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
