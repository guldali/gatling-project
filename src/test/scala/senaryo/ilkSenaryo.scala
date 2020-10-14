package senaryo
// Gatling = Yük testi aracı
// Scala tabanlı
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import requests.Login

class ilkSenaryo extends Simulation {
  val login: Login = new Login();
  val httpConf = http.baseUrl("https://www.etasimacilik.com") //hangi web sitesi
/*
*
* Login olma senaryosu için Login Class'ı içerisindeki tokengenerate ve loginOl fonksiyolarını kullandık.
* Böylelikle daha kolay okunabilir ve daha sade bir görüntü yaratmış olduk.
*
* */



  val scn = scenario("Login")
    //.exec(login.tokengenerate())
    .exec(login.loginOl())
    .exec(login.tekliflerim())


  setUp(
    scn.inject(atOnceUsers(5))
      .protocols(httpConf)
  )
}
