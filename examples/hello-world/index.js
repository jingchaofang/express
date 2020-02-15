var express = require('../../');

var app = express();

app.get('/s', function(req, res){
  // let b = req.query.jsonp;
  // let a = `(function(){ var json={"ads":[{"clktk":["http://max-l.mediav.com/rtb?type=3&ver=1&v=CGQSEDE0MjMzNjJiYmFkYThmYWEYvfSJASDmzEIoAWIXODgwMjE2MjMzMDEwMjIzMTAwMTAwMjBwBIoBEDE0MjMzNjJiYmFkYThmYWE&k=2DBd6QAAAAA=&i=kK_vFTYE4Dtr&exp=BQBEMAJECQFEAQJECgBEEgBDJQBD&x=__OFFSET_X__&y=__OFFSET_Y__&st=__EVENT_TIME_START__&et=__EVENT_TIME_END__&adw=__ADSPACE_W__&adh=__ADSPACE_H__&tc=&turl="],"curl":"http://s3.nzbdw.com/s?type=2&r=20&mv_ref=ssp.360.cn&enup=CAABagyR3ggAAt6RDGoA&mvid=ODgwMjE2MjMzMDEwMjIzMTAwMTAwMjA&bid=1423362bbada8faa&price=AAAAAF47vy4AAAAAAAN9Zj64p7zi5QBkDpURTw==&finfo=DAABCAABAAAAJQgAAgAAAAQEAAM/VAy82OFKxgAIAAIAAAADCgADHVB1QiCnPlEIAAQAAAAeBgAKAAAGAA0ttwoADwAAAAAABaVQAA&ugi=FcyZhQEVzpRmTBUCFSgVKBUAABXyx8XsBxaAIBXIARaAnt2e5fjOBRwWs5nYsKS+um4VAAAA&uai=FfrokwIlAhUEFpSxo4zzzfKsOhXyCCXAgqKOCCUAFRoUCBwWqe6HnqXvvejiARUAAAA&ubi=FeqOUxX49IwDFfb4oBoV8t/nXRUEFRwW/taTpBcWlLHA78rQutA6NAIWoICQgAglBhXut5m7BxWGBRUANtaIg72lufbUURUAAA&clickid=0&cpx=__OFFSET_X__&cpy=__OFFSET_Y__&cs=__EVENT_TIME_START__&ce=__EVENT_TIME_END__&adsw=__ADSPACE_W__&adsh=__ADSPACE_H__&csign2=4Fj_ft7ZhLY=&url=http%3A%2F%2Frrew.120ehealth.com","desc":"【真相】颈椎疼怎么办 颈椎疼应该这样做","img":"http://s3m.nzwgs.com/galileo/680885-9038a8724e325fc0b3028b9a52f658b0.jpg","imgh":100,"imgw":180,"imptk":["http://s3.nzbdw.com/s?type=1&r=20&tid=ODgwMjE2MjMzMDEwMjIzMTAwMTAwMjA&finfo=DAABCAABAAAAJQgAAgAAAAQEAAM/VAy82OFKxgAIAAIAAAADCgADHVB1QiCnPlEIAAQAAAAeBgAKAAAGAA0ttwoADwAAAAAABaVQAA&mv_ref=ssp.360.cn&enup=CAABagyR3ggAAt6RDGoA&mvid=ODgwMjE2MjMzMDEwMjIzMTAwMTAwMjA&bid=1423362bbada8faa&ugi=FcyZhQEVzpRmTBUCFSgVKBUAABXyx8XsBxaAIBXIARaAnt2e5fjOBRwWs5nYsKS+um4VAAAA&uai=FfrokwIlAhUEFpSxo4zzzfKsOhXyCCXAgqKOCCUAFRoUCBwWqe6HnqXvvejiARUAAAA&ubi=FeqOUxX49IwDFfb4oBoV8t/nXRUEFRwW/taTpBcWlLHA78rQutA6NAIWoICQgAglBhXut5m7BxWGBRUANtaIg72lufbUURUAAA&ds=1&price=AAAAAF47vy4AAAAAAAN9Zj64p7zi5QBkDpURTw==","http://max-l.mediav.com/rtb?type=2&ver=1&v=CGQSEDE0MjMzNjJiYmFkYThmYWEYvfSJASDmzEIoAWIXODgwMjE2MjMzMDEwMjIzMTAwMTAwMjCIAQSaARAxNDIzMzYyYmJhZGE4ZmFh&k=Zt+otwAAAAA=&w=AAAAAF47vy4AAAAAAAN9nHxD4VXu4kCCXXv0tg&i=kK_vFTYE4Dtr&exp=BQBEMAJECQFEAQJECgBEEgBDJQBD&z=1"],"slot":1,"src":"康乐 · 猎媒","title":"【真相】颈椎疼怎么办 颈椎疼应该这样做","type":1} ],"reqtimes":"1"}; window['${b}'](json); })();`
  res.send('a');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
