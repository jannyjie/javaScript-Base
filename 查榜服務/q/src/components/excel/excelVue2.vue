<template>
    <button @click="tableToExcel('table', 'Lorem Table')">export </button>
    <table ref="table" id="loremTable" summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
        <caption>lorem ipsum</caption>
        <colgroup align="center"></colgroup>
        <colgroup align="left"></colgroup>
        <colgroup span="2" align="center"></colgroup>
        <colgroup span="3" align="center"></colgroup>
        <thead valign="top">
        <tr>
            <th>idsads</th>
            <th>1232</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>lorem ipsum</td>
            <td>sit amet</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
// import {ref} from 'vue';

export default {
    data(){
        return{
        uri :'data:application/vnd.ms-excel;base64,',
        template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
        format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
        }
    },
    methods:{
        tableToExcel(table, name){
        
        if (!table.nodeType) table = this.$refs.table
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        window.location.href = this.uri + this.base64(this.format(this.template, ctx))
        }
    }
}
</script>

<style>

</style>