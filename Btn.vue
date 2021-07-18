<template>
    <a v-bind="data(attr)">{{text}}<span v-if="!attr.href.includes('huntertrammell.dev') && attr.href.includes('http')" class="sr-only">this link opens in a new tab</span></a>
</template>
<script>
export default {
    props: ['attr'],
    data: function(){
        return {
            text: '',
        }
    },
    methods: {
        data: function(attrObj){
            // create accessible attributes
            attrObj['tabindex'] = '0';
            attrObj['role'] = 'link';
            attrObj['title'] = attrObj['text'];
            this.text = attrObj['title'];
            delete attrObj['text'];
            if(!attrObj['href'].includes('createfervor') && attrObj['href'].includes('http')){
                attrObj['target'] = '_blank';
                attrObj['rel'] = 'noreferrer';
            }
            if(!attrObj['class'] && attrObj['color']) {
                attrObj['class'] = `btn btn-${attrObj['color']}`;
                delete attrObj['color'];
                if(attrObj['size']){
                    attrObj['class'] += ` btn-${attrObj['size']}`;
                    delete attrObj['size'];
                }
            }
            return attrObj;
        }
    }
}
</script>
