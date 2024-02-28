module.exports = {
  title: '宿舍管理系统后台  ',

  /**
     * @type {boolean} true | false
     * @description Whether show the settings right-panel
     */
  showSettings: true,

  /**
     * @type {boolean} true | false
     * @description Whether need tagsView
     */
  tagsView: true,

  /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
  fixedHeader: false, // 是否固定头部table中的dragtable

  /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
  sidebarLogo: false, // 侧边栏不显示

  /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
  errorLog: 'production'
}
