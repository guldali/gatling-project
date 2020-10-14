package requests

import base.BaseConf
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import util.Util


class Login extends BaseConf {
  val util: Util = new Util();

  def loginOl() = {
    exec(http("login ol")
      .post("/uye-girisi") //sayfaya attığımız request tipi
      //.queryParam("__hapc", util.randomHapc())
      .queryParam("UserName", "***")
      //.queryParam("_forgeryToken", "${forgery_token}")
      .queryParam("_deviceId", "123456device")
      .queryParam("password", "***")
      .headers(header_1)

      //Buradan sonrası response datayı log'a yazdırdığımız yer
      .check(bodyString.saveAs("BODY"))) //Result olarak ne döndüğünü kontrol ediyoruz.
      .exec(session => {
        val response = session("BODY").as[String]
        println(s"Response body: \n$response \n")
        session
      })
  }

  def tekliflerim() = {
    exec(http("teklife gel")
      .post("/yukalan/hesabim/tekliflerim")
      .queryParam("_deviceId", "123456device")
      .headers(header_1)
      //Buradan sonrası response datayı log'a yazdırdığımız yer
      .check(bodyString.saveAs("BODY"))) //Result olarak ne döndüğünü kontrol ediyoruz.
      .exec(session => {
        val response = session("BODY").as[String]
        println(s"Response body: \n$response \n")
        session
      })
  }

}
