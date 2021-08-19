import moment from 'moment';

class DateCalculator {
  constructor(dateFrom, dateTo) {
    // moment 객체로 넣어줘야 합니다.
    const utcTimeFrom = typeof dateFrom === 'object' ? dateFrom : this.DjangoTimeToMoment(dateFrom);
    const utcTimeTo = typeof dateTo === 'object' ? dateTo : this.DjangoTimeToMoment(dateTo);

    const a = moment(utcTimeFrom).toDate();
    const b = moment(utcTimeTo).toDate();

    const localFrom = moment(a).local();
    const localTo = moment(b).local();

    this.dateFrom = localFrom;
    this.dateTo = localTo;
  }

  diffAuto() {
    const { dateFrom } = this;
    const { dateTo } = this;

    return `${dateTo.from(dateFrom)} ago`;
  }

  diffDay() {
    return this.dateTo.diff(this.dateFrom, 'days');
  }

  diffMonth() {
    return this.dateTo.diff(this.dateFrom, 'months');
  }

  diffYear() {
    return parseInt(this.dateTo.diff(this.dateFrom, 'months') / 12, 10);
  }

  DjangoTimeToMoment(t) {
    console.log(this);
    const String = `${t.split('T')[0]} ${t.split('T')[1]}`;
    const result = moment(String).format('YYYY-MM-DD HH:mm:ss');
    return result;
  }
}

export default DateCalculator;
