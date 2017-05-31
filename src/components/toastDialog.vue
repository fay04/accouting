<template>
  	<div style="">
        <div class="note-mask_transparent"></div>
        <div class="note-toast">
            <i class="icon-loading iconfont"></i>
            <p class="note-toast__content">刷新中，请稍候。。。</p>
        </div>
    </div>
</template>

<script>
	export default {
		
		  data() {
		    return {
		      
		     
		    }
		  }
	}
</script>

<style lang="scss">
	.note-mask_transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.note-toast {
    position: fixed;
    z-index: 5000;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    .note-icon_toast.note-loading {
        margin: 30px 0 0;
        width: 38px;
        height: 38px;
        vertical-align: baseline;
    }
    .icon-loading {
        display: block;
        margin-top: 20px;
        font-size: 48px;
        -webkit-animation: loading 1s steps(12, end) infinite;
        animation: loading 1s steps(12, end) infinite; 
    }
    .note-toast__content {
        margin: 4px 0 15px;
    }
}

@-webkit-keyframes loading {
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}

@keyframes loading {
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    100% {
        transform: rotate3d(0, 0, 1, 360deg);
    }
}

</style>