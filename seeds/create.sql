DROP DATABASE IF EXISTS TWWebBasic;

CREATE DATABASE TWWebBasic DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;;
USE TWWebBasic;
CREATE TABLE question(
  id INT NOT NULL PRIMARY KEY auto_increment,
  question_num INT NOT NULL,
  name VARCHAR(20) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  type VARCHAR(20) NOT NULL ,
  answer VARCHAR(255) NOT NULL,
  score INT NOT NULL
);

CREATE TABLE choice(
  id INT NOT NULL PRIMARY KEY auto_increment,
  item VARCHAR(20) NOT NULL,
  options VARCHAR(20) NOT NULL,
  question_id INT NOT NULL
);

ALTER TABLE choice ADD CONSTRAINT FK_question_choice FOREIGN KEY (question_id) REFERENCES question (id)
ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(1,"tk0","UML的中文全称是:","fillIn","统一建模语言",5);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(2,"tk1","对象最突出的特征是:","fillIn","封装性-继承性-多态性",5);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(3,"xz0","UML与软件工程的关系是:","single","A",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(4,"xz1","Java 语言支持:","single","A",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(5,"dx0","用例的粒度分为以下哪三种。","multi","A-B-D",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(6,"dx1","类图由以下哪三部分组成。","multi","A-B-C",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(7,"pd0","用例图只是用于和客户交流和沟通的,用于确定需求。","judge","false",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(8,"pd1","在状态图中,终止状态在一个状态图中允许有任意多个。","judge","true",10);
INSERT INTO question(question_num,name,topic,type,answer,score) VALUES(9,"jd0","简述什么是模型以及模型的表现形式?","short","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。",20);

INSERT INTO choice(item,options,question_id) VALUES("","",1);

INSERT INTO choice(item,options,question_id) VALUES("","",2);

INSERT INTO choice(item,options,question_id) VALUES("A","UML就是软件工程",3);
INSERT INTO choice(item,options,question_id) VALUES("B","UML参与到软件工程中软件开发过UML",3);
INSERT INTO choice(item,options,question_id) VALUES("C","UML与软件工程无关",3);
INSERT INTO choice(item,options,question_id) VALUES("D","UML是软件工程的一部分",3);

INSERT INTO choice(item,options,question_id) VALUES("A","单继承",4);
INSERT INTO choice(item,options,question_id) VALUES("B","多继承",4);
INSERT INTO choice(item,options,question_id) VALUES("C","单继承和多继承都支持",4);
INSERT INTO choice(item,options,question_id) VALUES("D","继承和多继承都不支持",4);

INSERT INTO choice(item,options,question_id) VALUES("A","概述级",5);
INSERT INTO choice(item,options,question_id) VALUES("B","需求级",5);
INSERT INTO choice(item,options,question_id) VALUES("C","用户目标级",5);
INSERT INTO choice(item,options,question_id) VALUES("D","子功能级",5);

INSERT INTO choice(item,options,question_id) VALUES("A","名称(Name) ",6);
INSERT INTO choice(item,options,question_id) VALUES("B","属性(Attribute)",6);
INSERT INTO choice(item,options,question_id) VALUES("C","操作(Operation)",6);
INSERT INTO choice(item,options,question_id) VALUES("D","方法(Function)",6);

INSERT INTO choice(item,options,question_id) VALUES("true","true",7);
INSERT INTO choice(item,options,question_id) VALUES("false","false",7);

INSERT INTO choice(item,options,question_id) VALUES("true","true",8);
INSERT INTO choice(item,options,question_id) VALUES("false","false",8);

INSERT INTO choice(item,options,question_id) VALUES("","",9);

select * from choice;
select * from question;
