export default {
  methods: {
    isValidCPF(c) {
      if ((c = c.replace(/[^\d]/g,"")).length !== 11) {
        return false;
      }
      const invalids = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
      ]

      if (invalids.indexOf(c) !== -1) {
        return false;
      }

      let r;
      let s = 0;

      for (let i=1; i<=9; i++)
        s = s + parseInt(c[i-1]) * (11 - i);

      r = (s * 10) % 11;

      if ((r === 10) || (r === 11))
        r = 0;

      if (r !== parseInt(c[9])){
        return false;
      }

      s = 0;

      for (let i = 1; i <= 10; i++)
        s = s + parseInt(c[i-1]) * (12 - i);

      r = (s * 10) % 11;

      if ((r === 10) || (r === 11))
        r = 0;

      return r === parseInt(c[10]);
    }
  }
}
