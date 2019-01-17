'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">Senzing SDK Components</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        \n                            <a href="license.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>LICENSE\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n              ' + (isNormalMode ? 'data-target="#additional-pages"' : 'data-target="#xs-additional-pages"') + '>\n                <span class="icon ion-ios-book"></span>\n                <span>Guides</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n                ' + (isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"') + '>\n                \n                    <li class="link ">\n                        <a href="additional-documentation/quick-start.html" data-type="entity-link" data-context-id="additional">Quick Start</a>\n                    </li>\n                \n                    <li class="link ">\n                        <a href="additional-documentation/themes.html" data-type="entity-link" data-context-id="additional">Themes</a>\n                    </li>\n                \n                    <li class="link for-chapter2">\n                        <a href="additional-documentation/themes/pre-built.html" data-type="entity-link" data-context-id="additional">Pre Built</a>\n                    </li>\n                \n                    <li class="link for-chapter2">\n                        <a href="additional-documentation/themes/customizing.html" data-type="entity-link" data-context-id="additional">Customizing</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' + (isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"') + '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') + '>\n                \n                    <li class="link">\n                        <a href="modules/SenzingSdkModule.html" data-type="entity-link">SenzingSdkModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#components-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"' : 'data-target="#xs-components-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"') + '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="components-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"' : 'id="xs-components-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzConfigurationAboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzConfigurationAboutComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzConfigurationComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzEntityDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzEntityDetailComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzPoweredByComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzPoweredByComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzSearchComponent</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="components/SzSearchResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SzSearchResultsComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' + (isNormalMode ? 'data-target="#injectables-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"' : 'data-target="#xs-injectables-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"') + '>\n                                    <span class="icon ion-md-arrow-round-down"></span>\n                                    <span>Injectables</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' + (isNormalMode ? 'id="injectables-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"' : 'id="xs-injectables-links-module-SenzingSdkModule-804964f541e4f7b950e98da648bd8cfc"') + '>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzDataSourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzDataSourceService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzEntityTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzEntityTypeService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzMappingAttrService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzMappingAttrService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzMappingTemplateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzMappingTemplateService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzMessageBundleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzMessageBundleService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzSearchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzSearchService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzServerErrorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzServerErrorsService</a>\n                                        </li>\n                                    \n                                        <li class="link">\n                                            <a href="injectables/SzSettingsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SzSettingsService</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/SzDataFile.html" data-type="entity-link">SzDataFile</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzDataFileField.html" data-type="entity-link">SzDataFileField</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzMappingAttr.html" data-type="entity-link">SzMappingAttr</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzProject.html" data-type="entity-link">SzProject</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzRestConfiguration.html" data-type="entity-link">SzRestConfiguration</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzServerError.html" data-type="entity-link">SzServerError</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SzTopFieldValue.html" data-type="entity-link">SzTopFieldValue</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' + (isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"') + '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' + (isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"') + '>\n                        \n                            <li class="link">\n                                <a href="injectables/SzDataSourceService.html" data-type="entity-link">SzDataSourceService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzEntityTypeService.html" data-type="entity-link">SzEntityTypeService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzMappingAttrService.html" data-type="entity-link">SzMappingAttrService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzMappingTemplateService.html" data-type="entity-link">SzMappingTemplateService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzMessageBundleService.html" data-type="entity-link">SzMessageBundleService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzSearchService.html" data-type="entity-link">SzSearchService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzServerErrorsService.html" data-type="entity-link">SzServerErrorsService</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/SzSettingsService.html" data-type="entity-link">SzSettingsService</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataFileFieldInfo.html" data-type="entity-link">SzDataFileFieldInfo</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataFileInfo.html" data-type="entity-link">SzDataFileInfo</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzDataSourceBreakdown.html" data-type="entity-link">SzDataSourceBreakdown</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityData.html" data-type="entity-link">SzEntityData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityDetailSectionData.html" data-type="entity-link">SzEntityDetailSectionData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityDetailSectionSummary.html" data-type="entity-link">SzEntityDetailSectionSummary</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntityRecord.html" data-type="entity-link">SzEntityRecord</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntitySearchParams.html" data-type="entity-link">SzEntitySearchParams</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzEntitySearchParams-1.html" data-type="entity-link">SzEntitySearchParams</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzFeature.html" data-type="entity-link">SzFeature</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzFeatures.html" data-type="entity-link">SzFeatures</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzMatchFields.html" data-type="entity-link">SzMatchFields</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzProjectInfo.html" data-type="entity-link">SzProjectInfo</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRawData.html" data-type="entity-link">SzRawData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRawDataMatches.html" data-type="entity-link">SzRawDataMatches</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRelatedEntity.html" data-type="entity-link">SzRelatedEntity</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzResolvedEntityData.html" data-type="entity-link">SzResolvedEntityData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzRestConfigurationParameters.html" data-type="entity-link">SzRestConfigurationParameters</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzSearchResultEntityData.html" data-type="entity-link">SzSearchResultEntityData</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzSearchResultMatch.html" data-type="entity-link">SzSearchResultMatch</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/SzSearchResults.html" data-type="entity-link">SzSearchResults</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));