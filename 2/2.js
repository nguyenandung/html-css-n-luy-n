var hocvien = {
	ten : "Viet",
	ho : "Nguyen",
	tuoi: 31,
	chieucao:197,
	cannang:45,
	tendaydu: function () {
		return this.ho +" " + this.ten ;},
	danhgia: function () {
		if (this.chieucao/this.cannang < 3) {return "đep trai" ;}
		else {return "xau xí";}
	}
}
console.log(hocvien.tendaydu());
console.log(hocvien.danhgia())