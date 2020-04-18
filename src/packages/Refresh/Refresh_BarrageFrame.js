function initPkg_Refresh_BarrageFrame() {
	initPkg_Refresh_BarrageFrame_Dom();
    initPkg_Refresh_BarrageFrame_Func();
    initPkg_Refresh_BarrageFrame_Set();
}

function initPkg_Refresh_BarrageFrame_Dom() {
	Refresh_BarrageFrame_insertIcon();
}
function Refresh_BarrageFrame_insertIcon() {
	let a = document.createElement("a");
    a.className = "Barrage-toolbarLock";
    a.id = "refresh-barrage-frame";
	a.innerHTML = '<i class="Barrage-toolbarIcon"></i><span id="refresh-barrage-frame__text" class="Barrage-toolbarText">拉高弹幕框</span>';
	let b = document.getElementsByClassName("Barrage-toolbar")[0];
	b.insertBefore(a, b.childNodes[0]);
	
}

function initPkg_Refresh_BarrageFrame_Func() {
	document.getElementById("refresh-barrage-frame").addEventListener("click", function() {
        let dom_rank = document.getElementsByClassName("layout-Player-rank")[0];
        let dom_barrage = document.getElementById("js-player-barrage");
        if (dom_rank.style.display == "none") {
            // 被拉高
            dom_rank.style.display = "block";
            dom_barrage.style = "";
            document.getElementById("refresh-barrage-frame__text").innerText = "拉高弹幕框";
        } else {
            // 没拉高
            let topHeight = document.getElementsByClassName("layout-Player-announce")[0].offsetHeight;
            dom_rank.style.display = "none";
            dom_barrage.style = "top:" + topHeight + "px";
            document.getElementById("refresh-barrage-frame__text").innerText = "恢复弹幕框";
        }
        saveData_Refresh();
    });
}

function refresh_BarrageFrame_getStatus() {
    let dom_rank = document.getElementsByClassName("layout-Player-rank")[0];
    if (dom_rank.style.display == "none") {
        // 被拉高
        return true;
    } else {
        // 没拉高
        return false;
    }
}

function initPkg_Refresh_BarrageFrame_Set() {
    let ret = localStorage.getItem("ExSave_Refresh");
    if (ret != null) {
        let retJson = JSON.parse(ret);
        if (retJson.barrageFrame.status == undefined) {
            retJson.barrageFrame.status = false;
        }
        if (retJson.barrageFrame.status == true) {
            document.getElementById("refresh-barrage-frame").click();
        }
    }
}
