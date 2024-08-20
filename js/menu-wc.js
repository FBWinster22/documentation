'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">agronorte-lib-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AgAlertsComponent.html" data-type="entity-link" >AgAlertsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgAutocompleteComponent.html" data-type="entity-link" >AgAutocompleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgChartComponent.html" data-type="entity-link" >AgChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgChildDynamicInputComponent.html" data-type="entity-link" >AgChildDynamicInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgChildFormComponent.html" data-type="entity-link" >AgChildFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgContextMenuComponent.html" data-type="entity-link" >AgContextMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgCreateFormComponent.html" data-type="entity-link" >AgCreateFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgDynamicInputComponent.html" data-type="entity-link" >AgDynamicInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgFormComponent.html" data-type="entity-link" >AgFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgIndicadoresCalculados.html" data-type="entity-link" >AgIndicadoresCalculados</a>
                            </li>
                            <li class="link">
                                <a href="components/AgIndicatorsComponent.html" data-type="entity-link" >AgIndicatorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgIndicatorsMachinesComponent.html" data-type="entity-link" >AgIndicatorsMachinesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgInputComponent.html" data-type="entity-link" >AgInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgLoginComponent.html" data-type="entity-link" >AgLoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgLoginFormComponent.html" data-type="entity-link" >AgLoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgLogoComponent.html" data-type="entity-link" >AgLogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgModalComponent.html" data-type="entity-link" >AgModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgModelosIndicadoresComponent.html" data-type="entity-link" >AgModelosIndicadoresComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgNavbarComponent.html" data-type="entity-link" >AgNavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgPermissionsComponent.html" data-type="entity-link" >AgPermissionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgPopupAlertComponent.html" data-type="entity-link" >AgPopupAlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgRegisterFormComponent.html" data-type="entity-link" >AgRegisterFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgRelationsComponent.html" data-type="entity-link" >AgRelationsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgReportsComponent.html" data-type="entity-link" >AgReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgSearchComponent.html" data-type="entity-link" >AgSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgSelectComponent.html" data-type="entity-link" >AgSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgSocialMediaComponent.html" data-type="entity-link" >AgSocialMediaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgSubmenusComponent.html" data-type="entity-link" >AgSubmenusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgTableComponent.html" data-type="entity-link" >AgTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgTableschemaComponent.html" data-type="entity-link" >AgTableschemaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AgTimerComponent.html" data-type="entity-link" >AgTimerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChequeoAutoelevadorComponent.html" data-type="entity-link" >ChequeoAutoelevadorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenerateIndicatorsComponent.html" data-type="entity-link" >GenerateIndicatorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaletteComponent.html" data-type="entity-link" >PaletteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TemplateComponent.html" data-type="entity-link" >TemplateComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/BaseDynamicInputComponent.html" data-type="entity-link" >BaseDynamicInputComponent</a>
                                </li>
                                <li class="link">
                                    <a href="directives/BaseFormComponent.html" data-type="entity-link" >BaseFormComponent</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FormDefinitions.html" data-type="entity-link" >FormDefinitions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AgContextMenuService.html" data-type="entity-link" >AgContextMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AgSnackbarService.html" data-type="entity-link" >AgSnackbarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormValidationService.html" data-type="entity-link" >FormValidationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MousePositionService.html" data-type="entity-link" >MousePositionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AgTableSchemaInterface.html" data-type="entity-link" >AgTableSchemaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APIResponseInterface.html" data-type="entity-link" >APIResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiSearchCriteriaInterface.html" data-type="entity-link" >ApiSearchCriteriaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiSearchGroupInterface.html" data-type="entity-link" >ApiSearchGroupInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiSearchInterface.html" data-type="entity-link" >ApiSearchInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseApiSearchGroupInterface.html" data-type="entity-link" >BaseApiSearchGroupInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavMenusInterface.html" data-type="entity-link" >NavMenusInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInfoData.html" data-type="entity-link" >SignInfoData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableApiHeaders.html" data-type="entity-link" >TableApiHeaders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableApiSchemaInterface.html" data-type="entity-link" >TableApiSchemaInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});