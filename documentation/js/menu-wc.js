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
                    <a href="index.html" data-type="index-link">@farm-budget/source documentation</a>
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
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' : 'data-bs-target="#xs-controllers-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' :
                                            'id="xs-controllers-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' : 'data-bs-target="#xs-injectables-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' :
                                        'id="xs-injectables-links-module-AppModule-91c4d8013b9114927a6c8da1f74e793317b4d4349a1c7c6506775c3e0ce406a8ae52f52924daefd2e8d9e258a0c67fc980ca44f3de4e5a317349f019c18f94ba"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' :
                                            'id="xs-controllers-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' :
                                        'id="xs-injectables-links-module-AuthModule-0179fad35b0badca565b37f70263652c110e7523d37af04ec3513cc57280dbc6f6a563b7ce4757691ab0df6236f507c24349df9cb08189259d05f9cd6e577ae6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ChangePasswordProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ForgotPasswordProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenerateTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshTokensProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResetPasswordProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignInProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-e404d83ddc261ac40d9ad75f2d18600cc68f23a8907d56f65c787ad3d9341059c81cd599e9ddbb7e9ebfa983e08f6b270d40bb40de295a6ba17865e827db4997"' : 'data-bs-target="#xs-injectables-links-module-MailModule-e404d83ddc261ac40d9ad75f2d18600cc68f23a8907d56f65c787ad3d9341059c81cd599e9ddbb7e9ebfa983e08f6b270d40bb40de295a6ba17865e827db4997"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-e404d83ddc261ac40d9ad75f2d18600cc68f23a8907d56f65c787ad3d9341059c81cd599e9ddbb7e9ebfa983e08f6b270d40bb40de295a6ba17865e827db4997"' :
                                        'id="xs-injectables-links-module-MailModule-e404d83ddc261ac40d9ad75f2d18600cc68f23a8907d56f65c787ad3d9341059c81cd599e9ddbb7e9ebfa983e08f6b270d40bb40de295a6ba17865e827db4997"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' :
                                            'id="xs-controllers-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' :
                                        'id="xs-injectables-links-module-UsersModule-769b8f22d59f92c366a0aac501c8058c145c2170251366faf48f89d0fdc711b0dbd932c2b4f508413597f19ba9590df1d212b27da9df98892ddb6c86b5ef26ea"' }>
                                        <li class="link">
                                            <a href="injectables/CreateUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindOneUserByEmailProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgotPasswordDto.html" data-type="entity-link" >ForgotPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangePasswordProvider.html" data-type="entity-link" >ChangePasswordProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateUserProvider.html" data-type="entity-link" >CreateUserProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindOneUserByEmailProvider.html" data-type="entity-link" >FindOneUserByEmailProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForgotPasswordProvider.html" data-type="entity-link" >ForgotPasswordProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerateTokensProvider.html" data-type="entity-link" >GenerateTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokensProvider.html" data-type="entity-link" >RefreshTokensProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResetPasswordProvider.html" data-type="entity-link" >ResetPasswordProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendResetPassWordLink.html" data-type="entity-link" >SendResetPassWordLink</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInProvider.html" data-type="entity-link" >SignInProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link" >AuthenticationGuard</a>
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
                                <a href="interfaces/ActiveUserData.html" data-type="entity-link" >ActiveUserData</a>
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