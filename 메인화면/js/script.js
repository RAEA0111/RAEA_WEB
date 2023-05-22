$(function() {
    // 이미지 슬라이드
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    })

    let lat = 37.51827474229924     // 위도
    let lon = 126.9064266450123    // 경도

    // let lat = 37.5207569     // 위도
    // let lon = 126.9003409    // 경도

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    // 지도를 생성한다
    var map = new kakao.maps.Map(container, options); 

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도 상단 우측에 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    // 지도에 확대/축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대/축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // 지도에 마커를 생성하고 표시한다
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lon), // 마커의 좌표
        map: map                                    // 마커를 표시할 지도 객체
    });

    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');

        let position = document.getElementById('position')            
        // 위도,경도 정보
        let latlng = mouseEvent.latLng
        let lat = latlng.getLat()       // 위도
        let lng = latlng.getLng()       // 경도
        let msg = `위도 : ${lat}, 경도 : ${lng}`

        position.innerHTML = msg
    });	


    // 커스텀 오버레이를 생성하고 지도에 표시한다
    var customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        content: '<div class="my-place">휴먼교육센터</div>', 
        position: new kakao.maps.LatLng(lat, lon), // 커스텀 오버레이를 표시할 좌표
        xAnchor: 0.5, // 컨텐츠의 x 위치
        yAnchor: 0 // 컨텐츠의 y 위치
    });

    /* 사이드바 */
    $('#btn-menu').on('click',function(){
        $('.side-bar').toggleClass('active')
    })

    /* 닫기 */
    $('#btn-close').on('click',function(){
        $('.side-bar').toggleClass('active')
    })
   

})
