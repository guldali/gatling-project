package util

class Util {

    def randomHapc(): String = {
      val uuid = java.util.UUID.randomUUID.toString
      return uuid;
    }
}
