# [0.52.0](https://github.com/georgejecook/maestro-roku/compare/0.51.3...0.52.0) (2022-08-01)


### Bug Fixes

* **core:** adds itemCompletionState to mc_Selection ([94d65ee](https://github.com/georgejecook/maestro-roku/commit/94d65eebb0a4bedc7bb19d0783bb449bf5ef80a3))
* **core:** fixes asXXX methods for simple values, and also addresses issues with bad casts ([eb57d8f](https://github.com/georgejecook/maestro-roku/commit/eb57d8f1f3753bbce0bd3ada0deaeceea3fb9eee))
* **core:** fixes completion state callback not firing for selection ([ab458d2](https://github.com/georgejecook/maestro-roku/commit/ab458d2dad9b892102cd11cc1cd103fc483b3af1))
* **core:** fixes incorrectly typed fields ([cf168aa](https://github.com/georgejecook/maestro-roku/commit/cf168aae83072f44048bc519f7f7038c56816a84))
* **ml:** fixes list bumping up when cancelling a long key press scroll ([cc7107b](https://github.com/georgejecook/maestro-roku/commit/cc7107b72f0a3e716a2f8565cae25088fcb1645b))


### Features

* **core:** adds selection completion api ([0addb21](https://github.com/georgejecook/maestro-roku/commit/0addb2161ccef7db8170fb9efefa20bd082e2bc9))
* **FocusManager:** adds feature to disable focus manager ([50d731e](https://github.com/georgejecook/maestro-roku/commit/50d731e441946c27a472d5151184b9a80b17915b))



# [0.50.0](https://github.com/georgejecook/maestro-roku/compare/0.49.2...0.50.0) (2022-06-13)


### Bug Fixes

* **core:** addresses crash when stripping logs from erroneous line of code ([7dca5e5](https://github.com/georgejecook/maestro-roku/commit/7dca5e57316dec61b22276e7b882b11f1d010602))
* **core:** adds ability to pass a simple value into asXXX/getXXX ([06885a0](https://github.com/georgejecook/maestro-roku/commit/06885a045b8820556556b129da143bc576b0da33))
* **core:** adds missing getXXX methods ([2e24568](https://github.com/georgejecook/maestro-roku/commit/2e2456808e08c146b142481ef606b15d967bb38f))
* **core:** fixes issues after updating packages ([070e1dd](https://github.com/georgejecook/maestro-roku/commit/070e1ddc5337c30c52c197a292a7badc81ed27c8))
* **core:** remove more logging ([52a2923](https://github.com/georgejecook/maestro-roku/commit/52a2923a562766ed2f5b934a44743fb820071564))
* **LaunchSequence:** adds more resilience and better logging ([d713706](https://github.com/georgejecook/maestro-roku/commit/d7137069499c15c005413aca5b503d515154b1cf))
* **LaunchSequence:** adds more resilience and better logging ([8626c2b](https://github.com/georgejecook/maestro-roku/commit/8626c2b98ae52ad7214469e3452dd567b7535bb6))
* **mioc:** use maestro private log proxy to avoid crashes ([43bf469](https://github.com/georgejecook/maestro-roku/commit/43bf46978811b52d390fe9d49bfcb699bcbf75de))
* **ml:** fixes crashes due to invalid boolean values ([c6d372f](https://github.com/georgejecook/maestro-roku/commit/c6d372f97847cff0acb4469e596273669c8b2147))


### Features

* **animation:** Fixes some animation issues, and adds new rectangle interpolator ([d663efe](https://github.com/georgejecook/maestro-roku/commit/d663efe85a8c40fc678a2427efdcb526a8751cbf))
* **collections:** supports auto injection of m ([a65951a](https://github.com/georgejecook/maestro-roku/commit/a65951a7a3cad3d2e0fa9cd70396ce5e8af409a0))
* **core:** adds error interface type ([2412bee](https://github.com/georgejecook/maestro-roku/commit/2412bee65495d15ac89b42ada34c1693c122050c))
* **core:** adds global asXXX methods, which allow for modern optional-chaining like behavior ([ff99de3](https://github.com/georgejecook/maestro-roku/commit/ff99de377bb7a0dea26998259ab9203132393986))
* **tasks:** new api setTimeout and setinterval ([0aefbaf](https://github.com/georgejecook/maestro-roku/commit/0aefbaf5ca1498a6826d29e4d8e31241398f5661))



## [0.46.4](https://github.com/georgejecook/maestro-roku/compare/0.46.3...0.46.4) (2022-03-23)



## [0.46.2](https://github.com/georgejecook/maestro-roku/compare/0.46.1...0.46.2) (2022-03-23)



## [0.45.4](https://github.com/georgejecook/maestro-roku/compare/0.45.3...0.45.4) (2022-03-11)


### Features

* **core:** adds wrap to getItemAtoffset ([b7e42a4](https://github.com/georgejecook/maestro-roku/commit/b7e42a4dabe753e1a4bdfa07d9ea41fbe1ccf152))



## [0.45.2](https://github.com/georgejecook/maestro-roku/compare/0.45.1...0.45.2) (2022-03-11)


### Features

* **core:** can apply a function to a class ([bd7f8e5](https://github.com/georgejecook/maestro-roku/commit/bd7f8e5edd990a598b7307c1ae8cc717f952c8af))



## [0.45.1](https://github.com/georgejecook/maestro-roku/compare/0.45.0...0.45.1) (2022-03-09)


### Bug Fixes

* stick on bsc 0.45.1 coz brighterscript > 0.45.1 has an issue generating d files, as per https://github.com/rokucommunity/brighterscript/issues/534 ([4967908](https://github.com/georgejecook/maestro-roku/commit/496790884a397ac7aca1cb9671c7d83d636bfab2))
* **button:** Fixes issue that prevented style updating ([0117d30](https://github.com/georgejecook/maestro-roku/commit/0117d30b346d9d54cf419d4efd1b7aa6ed3810bb))


### Features

* **core:** adds utilities and vase class support for binding data to generated views ([95769c2](https://github.com/georgejecook/maestro-roku/commit/95769c262ef85229b23b718b3e55c3d312791f2d))
* **styleManager:** improves extending, to allow using path semantics, to update styles. Adds ability for including styles in a bundle ([cc6a785](https://github.com/georgejecook/maestro-roku/commit/cc6a785ad9406aa2534bc74788675bf0f67ef045))
* **views:** adds _dataMap syntax to views ([8552352](https://github.com/georgejecook/maestro-roku/commit/85523526358c40dd2e8464cd13ab41a2d9dfa214))
* **views:** adds helper to get ids from view bundle json ([28dbfa7](https://github.com/georgejecook/maestro-roku/commit/28dbfa7a529a7b4fe05f6ae425f23cf30b97ff6f))



# [0.43.0](https://github.com/georgejecook/maestro-roku/compare/0.42.4...0.43.0) (2022-02-22)


### Bug Fixes

* **ml:** fixes other crasher ([360a165](https://github.com/georgejecook/maestro-roku/commit/360a1653175e05f8f4358875f376f0b1b3f0f46c))



# [0.42.0](https://github.com/georgejecook/maestro-roku/compare/0.41.3...0.42.0) (2022-02-14)


### Features

* **core:** adds getSubType ([cc47e31](https://github.com/georgejecook/maestro-roku/commit/cc47e3152e23e2135c4709b989bc189011fa06a4))



## [0.41.3](https://github.com/georgejecook/maestro-roku/compare/0.41.2...0.41.3) (2022-02-11)


### Bug Fixes

* **FadeTransition:** fixes content note appearing ([34ad011](https://github.com/georgejecook/maestro-roku/commit/34ad0116376221be5e94745b8e8d377e13510f18))
* **ml:** adds resilience to timing issues in multi grid layouts ([ea60315](https://github.com/georgejecook/maestro-roku/commit/ea603151ac985b76868ed2baddf27815c9389972))


### Features

* **view:** adds one-shot transitions to navcontroller ([7166d78](https://github.com/georgejecook/maestro-roku/commit/7166d787dfc06a0b6b14119ccbbc9902410d8467))



## [0.41.1](https://github.com/georgejecook/maestro-roku/compare/0.41.0...0.41.1) (2022-02-07)


### Bug Fixes

* **DeveloperScreen:** adds mv namespace ([8dc758d](https://github.com/georgejecook/maestro-roku/commit/8dc758d016ce5cc3dfe64022ff21b52c867360e5))
* **FocusManager:** allows option to set focus on main if focus was invalid - useful for some recovery scenarios ([832c7c2](https://github.com/georgejecook/maestro-roku/commit/832c7c2ad1d49e712412450ad1135902c9167985))
* **Transitions:** fixes bug in transition seleciton ([6ad8068](https://github.com/georgejecook/maestro-roku/commit/6ad8068393852920df5785e01a5aebf1ec83a258))


### Features

* **Core:** Support a mechanism to opt out of popping, on dismiss ([beac116](https://github.com/georgejecook/maestro-roku/commit/beac116826b1802bb9360df93fcee1c86d9f9438))
* **Sample:** improvements to sample app ([6daeb49](https://github.com/georgejecook/maestro-roku/commit/6daeb4931b18942013ca6f19d6d3e4caf9f2c0b9))
* **Samples:** Improve samples ([8f15f3d](https://github.com/georgejecook/maestro-roku/commit/8f15f3dace25ecbc133d8758d6b28430edbb6b98))



# [0.40.0](https://github.com/georgejecook/maestro-roku/compare/0.39.0...0.40.0) (2022-01-31)


### Features

* **core:** adds CommandSequence and LaunchSequence ([3b7d5de](https://github.com/georgejecook/maestro-roku/commit/3b7d5de9726aba5c49a5ab15ce548685a3ba3473))
* **core:** adds DeveloperScreen ([ca846b4](https://github.com/georgejecook/maestro-roku/commit/ca846b4dc19d46d4ab8b54e750186197872abb2d))
* **core:** adds updateInstance method ([ce73b94](https://github.com/georgejecook/maestro-roku/commit/ce73b94f3e1e8c963dee98067b648252231bbafb))
* **sample:** adds default setup to ml sample ([d42ef76](https://github.com/georgejecook/maestro-roku/commit/d42ef768747b0b9dc4ae584424d890d1ae046da3))
* **sample:** updates ([244193e](https://github.com/georgejecook/maestro-roku/commit/244193e1efdb920d2ead47633b12fafa357fbaaf))



# [0.39.0](https://github.com/georgejecook/maestro-roku/compare/0.38.0...0.39.0) (2022-01-30)


### Features

* **view:** adds GenericAnimation and ViewJson animation, allowing for animating to or between json view bundle format jsonblobs ([aa85e6f](https://github.com/georgejecook/maestro-roku/commit/aa85e6f7c1dbe4746020767654844c095624b1f3))



# [0.38.0](https://github.com/georgejecook/maestro-roku/compare/0.37.0...0.38.0) (2022-01-30)


### Features

* **core:** adds ability to update views, with bundle json format ([5824a45](https://github.com/georgejecook/maestro-roku/commit/5824a45736c48bc7811d8e523823612640670f8d))
* **core:** adds append and createPath helperS ([6940808](https://github.com/georgejecook/maestro-roku/commit/6940808c2b7897a55c661408fb435dd6329657be))
* **core:** adds originSelection to base screens ([6e5a199](https://github.com/georgejecook/maestro-roku/commit/6e5a1997a57dac25e21c152671653a0bf02f77c5))
* **ml:** adds onRowData delegate and sendRowData methods for easy communication from custom rows ([e7219b3](https://github.com/georgejecook/maestro-roku/commit/e7219b35f48043410afc45c6cfcf93cba050baad))
* **mv_Button:** adds mv_Button ([0e6ab68](https://github.com/georgejecook/maestro-roku/commit/0e6ab68a2c41b8917e954b46765186420cfdd12c))
* **mv_ControlsGroup:** adds mv_ControlsGroup ([81d7f0a](https://github.com/georgejecook/maestro-roku/commit/81d7f0a2dae26f23763fc38d3e7cc9f43a2f03e2))
* **styleManager:** adds addStyle and addStlyes methods ([9ab07b3](https://github.com/georgejecook/maestro-roku/commit/9ab07b31ff58a4163096566e5f7ccfa1cb05dadd))



## [0.36.1](https://github.com/georgejecook/maestro-roku/compare/0.36.0...0.36.1) (2022-01-26)


### Bug Fixes

* **multicontainer:** removes debug flag ([4d1cf84](https://github.com/georgejecook/maestro-roku/commit/4d1cf84af2b0091f09da88eda36201a5f102cf9b))



# [0.36.0](https://github.com/georgejecook/maestro-roku/compare/0.35.0...0.36.0) (2022-01-26)


### Features

* **core:** adds selection object and apis ([e3f802f](https://github.com/georgejecook/maestro-roku/commit/e3f802f853e497509a48b423838b5c8cc08806d3))



# [0.35.0](https://github.com/georgejecook/maestro-roku/compare/0.35.1...0.35.0) (2022-01-23)


### Bug Fixes

* **controls:** use audio keyboard for mini keyboard ([a86a4f0](https://github.com/georgejecook/maestro-roku/commit/a86a4f0c435a46a7d15c7cbcfb41cbc5a0d0db65))
* fixes grid issues around focus ([5f20f60](https://github.com/georgejecook/maestro-roku/commit/5f20f60b5b05ce244dd25fba789e345d031e7bea))
* **ml:** adds improvements for cancelling scrolling - especially with jumping to the next focused item ([706e862](https://github.com/georgejecook/maestro-roku/commit/706e862daace8bde422ace469704b3f1da7c9a69))
* **ml:** fixes issues that cause focus to get lost when scrolling to end, or require key up on long press to stop scrolling ([460d6db](https://github.com/georgejecook/maestro-roku/commit/460d6db5e6e0260c6f82caa271f1dc54dc4e4095))


### Features

* **core:** adds getXXX functions for easy path look up of specific value types ([b0a872e](https://github.com/georgejecook/maestro-roku/commit/b0a872eab50f0d9da22e01f6b5f54c29ee87b00e))
* **core:** Adds keypath array sorting ([11f143d](https://github.com/georgejecook/maestro-roku/commit/11f143dc225d1954318adf5a41a600f692737193))
* adds new punch out method getM and uses it in anim onFraction callbacks to make life nicer ([ce358a8](https://github.com/georgejecook/maestro-roku/commit/ce358a8cd30437938307ca459f755f1e5e6f80bf))



## [0.33.3](https://github.com/georgejecook/maestro-roku/compare/0.33.2...0.33.3) (2021-11-21)



## [0.33.2](https://github.com/georgejecook/maestro-roku/compare/0.33.1...0.33.2) (2021-11-20)


### Bug Fixes

* adds moveToEndIndex to make that notion easier to work with ([f15a51e](https://github.com/georgejecook/maestro-roku/commit/f15a51e0db35bf95bc4f0dbc678d7e37283b0b5b))
* adds support for long press inside of grids ([b824517](https://github.com/georgejecook/maestro-roku/commit/b8245172ffe3803f93750b096d55faa43a3155ae))
* converts settings to content nodes ([04469c8](https://github.com/georgejecook/maestro-roku/commit/04469c8bd3d61334bae285a5de67ca24c63c175b))
* fixes for scrolling speeds ([7d2a68a](https://github.com/georgejecook/maestro-roku/commit/7d2a68a91b66f378965478f48ee0f51adf16d6ab))
* fixes incorrect grid height ([cd18bfa](https://github.com/georgejecook/maestro-roku/commit/cd18bfa3e3e7ba4dc21b7672305f54742358ebcd))
* fixes left right long press in grids ([c8a2dab](https://github.com/georgejecook/maestro-roku/commit/c8a2dab7a0314314e355ec8a834a633be6ee7aa2))
* fixes various scrolling issues around floating to regular focus ([3c64682](https://github.com/georgejecook/maestro-roku/commit/3c6468216ed141bf6104e306105849aedbbeb2ac))
* fixes wrong grid row height in list ([d467e7b](https://github.com/georgejecook/maestro-roku/commit/d467e7bf9c1c4b2e9124c6d0e52037ad3b5b10a8))
* fixes wrong scroll offset when in flow-focus mode ([0ca7dcc](https://github.com/georgejecook/maestro-roku/commit/0ca7dccbeab4a39507845d054346a59f1cdc1f31))
* fixes wrong spelling on pool function ([bdf1485](https://github.com/georgejecook/maestro-roku/commit/bdf14855ef332f251b9ca67718a4ef4ae87880a3))
* keep correct sub-row index when scrolling grids ([4492968](https://github.com/georgejecook/maestro-roku/commit/4492968f30351b6c88ea21e2a9d5825958d480b2))
* observe numRows in settings ([a5cfe7c](https://github.com/georgejecook/maestro-roku/commit/a5cfe7ce79901e74a11ecc79e7cf4b3adf4e46b1))



## [0.32.1](https://github.com/georgejecook/maestro-roku/compare/0.32.0...0.32.1) (2021-10-28)


### Bug Fixes

* fixes child observables not clearing ([b81da63](https://github.com/georgejecook/maestro-roku/commit/b81da637d55cf0001e9c34dce4c4c36e10c07dde))



# [0.32.0](https://github.com/georgejecook/maestro-roku/compare/0.31.0...0.32.0) (2021-10-28)


### Bug Fixes

* Fixes various issues around focus and removing focus; plus hacky fix for list position offsetting, when the list is not at 0,0 ([23f3251](https://github.com/georgejecook/maestro-roku/commit/23f32518ef7c58ef308b84fecb8ff3f89c61df85))
* **ml:** [wip] addresses move to subrow issues ([7a44d4d](https://github.com/georgejecook/maestro-roku/commit/7a44d4d6e674e26c0f89145786e85bcd042631e1))
* **ml:** fiex scenarios around hiding/showing/sorting rows ([4424dbb](https://github.com/georgejecook/maestro-roku/commit/4424dbb5ef1635edc5d55f9515e473026db43498))
* better uses observable node events to udpate rows ([23b766c](https://github.com/georgejecook/maestro-roku/commit/23b766ccadb774e378e87348b6edfee22a85bf8b))
* wip fixes for change events in rows and grids ([5bb5f65](https://github.com/georgejecook/maestro-roku/commit/5bb5f6533d32def2d043127603a709b4b83a20df))


### Features

* adds change events to array ([b0fb423](https://github.com/georgejecook/maestro-roku/commit/b0fb423d73cb65c9d5b665c8f59dbfd9d11406d4))
* Adds ChildObservableContentNode ([3e7323b](https://github.com/georgejecook/maestro-roku/commit/3e7323b08d59ac95182ff5de1987ad9bdc8a3910))
* adds observeable node, for allowing lists to monitor child changes ([fbf4a37](https://github.com/georgejecook/maestro-roku/commit/fbf4a3779029ee4b9c23387dc11a0d4c36581f07))
* adds wip color interpolation helper ([06778f7](https://github.com/georgejecook/maestro-roku/commit/06778f717b1349a196b75f44c6bf5788f7ee6f4b))
* can sort arrays of nodes by a callfunc ([4ff5b0e](https://github.com/georgejecook/maestro-roku/commit/4ff5b0e17b203ca71b6fe332b9a3c6c5fbe08f01))
* labels can have normal and highlighted colors, toggled by isHighlighted flag ([8d75cd3](https://github.com/georgejecook/maestro-roku/commit/8d75cd30f2b4e5156b342543a26a3ff4528f151a))
* records lenght with child observeable collections, fixes some issues: ([24ff3d9](https://github.com/georgejecook/maestro-roku/commit/24ff3d9ef29b352908237e69827fe1ecf7f42bbe))
* update list to allow observing changes in contents ([6c8a018](https://github.com/georgejecook/maestro-roku/commit/6c8a018744addfd3b54e1c7c8609cfa97225d821))



## [0.30.4](https://github.com/georgejecook/maestro-roku/compare/0.30.3...0.30.4) (2021-10-15)


### Bug Fixes

* fixes including id fields in maps ([274f28f](https://github.com/georgejecook/maestro-roku/commit/274f28f3950572a72df625bda8e118fb9cd718bf))
* maintain length when deserializing array and map ([f5357fb](https://github.com/georgejecook/maestro-roku/commit/f5357fb0d81f01134709e158d96d7dcd7bb41634))



## [0.30.3](https://github.com/georgejecook/maestro-roku/compare/0.30.1...0.30.3) (2021-10-14)


### Bug Fixes

* fixes issue with registry readSerializable ([dededed](https://github.com/georgejecook/maestro-roku/commit/dededed338538397422b0f41a4c743185f4a7bf9))
* wires aniamted fields into navcontroller proxy functions and adds resetNavControllerToRoot on BaseScreen and BaseViewModel ([1e43f1c](https://github.com/georgejecook/maestro-roku/commit/1e43f1c11adc5a5eb4f4c623aafd051a549ace8b))


### Features

* can extend styles ([92e4dba](https://github.com/georgejecook/maestro-roku/commit/92e4dba6dacfb22881a3369acbab7d4baf207d50))
* imrpoves serialization, splitting out a utility namespace, and making it simple to serialize classes and nodes ([1e50081](https://github.com/georgejecook/maestro-roku/commit/1e500812ceb3db59da8bbbd3ffc375bf803b8ec1))



## [0.28.2](https://github.com/georgejecook/maestro-roku/compare/0.28.1...0.28.2) (2021-10-12)


### Bug Fixes

* fixes crash on combiner ([a25b4a3](https://github.com/georgejecook/maestro-roku/commit/a25b4a32122cd4614ebe47f3b859de9e99d6acc2))



## [0.28.1](https://github.com/georgejecook/maestro-roku/compare/0.28.0...0.28.1) (2021-10-12)


### Features

* adds default locale to style manager ([dd5b353](https://github.com/georgejecook/maestro-roku/commit/dd5b3530323cd39b22542bfa55e9e38e40be8660))



# [0.28.0](https://github.com/georgejecook/maestro-roku/compare/0.27.5...0.28.0) (2021-10-11)


### Features

* adds bundle loading mechansim for on-the-fly screen/view loading with locaization overrides ([5c59e6d](https://github.com/georgejecook/maestro-roku/commit/5c59e6dc1d0a736e43e001e0a74d5a084cc498e1))



## [0.27.5](https://github.com/georgejecook/maestro-roku/compare/0.27.4...0.27.5) (2021-10-08)


### Bug Fixes

* allows passthrough of mtarget to create sgnode ([f28912a](https://github.com/georgejecook/maestro-roku/commit/f28912ac99fbd22ea09b85e48dd35310e73d6afb))



## [0.27.4](https://github.com/georgejecook/maestro-roku/compare/0.27.3...0.27.4) (2021-10-08)



## [0.27.3](https://github.com/georgejecook/maestro-roku/compare/0.27.2...0.27.3) (2021-10-08)


### Bug Fixes

* allows setFocus to force override ([b6a6d5d](https://github.com/georgejecook/maestro-roku/commit/b6a6d5db782ed2a4cbd0a1b6ca553382ff0e768c))



## [0.27.2](https://github.com/georgejecook/maestro-roku/compare/0.27.1...0.27.2) (2021-10-08)


### Bug Fixes

* fix list crash ([e8bdd36](https://github.com/georgejecook/maestro-roku/commit/e8bdd3615c0beca438eda0faa2ca494561c644ef))
* fixes floating focus issues in grid row ([c1dfb92](https://github.com/georgejecook/maestro-roku/commit/c1dfb92cb0eeb0b50b201746e0ae9046f191f72a))
* fixes grid floating focus getting wrong index on long right press ([39d7ea2](https://github.com/georgejecook/maestro-roku/commit/39d7ea27130ea30c66646c74e2671a32bae2a6dd))
* minor fixes to getting screen pos's ([ace9fac](https://github.com/georgejecook/maestro-roku/commit/ace9facf7ddd93f2e84fca59f894f3902a8ce6a3))


### Features

* adds COlor anim ([14b3298](https://github.com/georgejecook/maestro-roku/commit/14b329890ee67af26e2ae72f33976772d82371c4))
* adds observer support for creating views with sgnode and from view utils json ([8a6880f](https://github.com/georgejecook/maestro-roku/commit/8a6880f3b8b2a1a341032459c249bf41df172a3f))
* improves collection index lookup and offset to support nodes and aas with keys ([3491f58](https://github.com/georgejecook/maestro-roku/commit/3491f5859b5962e18d3189991134ea209ff9f466))



## [0.25.2](https://github.com/georgejecook/maestro-roku/compare/0.25.1...0.25.2) (2021-09-23)


### Features

* adds containerHeightOverride to multicontainer ([8d93f62](https://github.com/georgejecook/maestro-roku/commit/8d93f622796e39fd31252e6439ceb8f8df0b5c20))



## [0.25.1](https://github.com/georgejecook/maestro-roku/compare/0.25.0...0.25.1) (2021-09-15)


### Bug Fixes

* fixes _debugM firing on every instantiation ([50035e7](https://github.com/georgejecook/maestro-roku/commit/50035e7369c8c07ee0f7ec1a7177893d720408d2))


### Features

* adds updateViewStyles api ([74d5bf8](https://github.com/georgejecook/maestro-roku/commit/74d5bf88a46cdbe8d2d9e5643b05e0b60df35efd))



# [0.24.0](https://github.com/georgejecook/maestro-roku/compare/0.23.1...0.24.0) (2021-09-02)


### Features

* setPath fills in gaps, better resilience ([f28fe93](https://github.com/georgejecook/maestro-roku/commit/f28fe93a1bd72283e7e28e7b22f094925f8c779a))



## [0.23.1](https://github.com/georgejecook/maestro-roku/compare/0.23.0...0.23.1) (2021-08-30)



# [0.23.0](https://github.com/georgejecook/maestro-roku/compare/0.22.0...0.23.0) (2021-08-30)


### Features

* improves createClass apis, alllowing passing in of class constructors, and allows path access for proxied mioc methods ([2c83462](https://github.com/georgejecook/maestro-roku/commit/2c83462bfff0937f841a3f20b3bdb4a8ea46dd04))



# [0.22.0](https://github.com/georgejecook/maestro-roku/compare/0.21.0...0.22.0) (2021-08-29)


### Bug Fixes

* pop views before setting state, so that observers have a chance to push a view after ([03fc1f9](https://github.com/georgejecook/maestro-roku/commit/03fc1f9ab0b6245cede82e326fa108740638fae5))


### Features

* adds support for deserializing views from json ([391b318](https://github.com/georgejecook/maestro-roku/commit/391b318652dea1361ced1d92d3b3ca31f519bfe7))



# [0.21.0](https://github.com/georgejecook/maestro-roku/compare/0.20.0...0.21.0) (2021-08-25)


### Bug Fixes

* fixes getpath indexing not being disabled ([43445b1](https://github.com/georgejecook/maestro-roku/commit/43445b11a186e22c00577b6feb07c4c80dd41891))
* published wrong version before ([d64d672](https://github.com/georgejecook/maestro-roku/commit/d64d6721c771b914845f33a4079f94d52fc8e204))
* **ml:** allows for setting focus while scrolling, to allow quick down + left/right combos) ([9d6ec62](https://github.com/georgejecook/maestro-roku/commit/9d6ec62b0b601c1475a90661f3697fadaf0a97c5))
* **ml:** Fixes issues that prevented jump to row working ([e775f42](https://github.com/georgejecook/maestro-roku/commit/e775f42581ce3425538000b76b4941b97609c189))
* **ml:** hardens list ([e02c625](https://github.com/georgejecook/maestro-roku/commit/e02c6253834adac6972bb98e7979ba715e537aac))
* **ml:** improves the mechansim for finishing scrolling when going back ([915fc20](https://github.com/georgejecook/maestro-roku/commit/915fc208d046c610a60fd28aa0abf32124ad9964))


### Features

* add sorting to collections ([41c9bd9](https://github.com/georgejecook/maestro-roku/commit/41c9bd9eea9ba5eb57c747019aa75e775e3e872b))
* adds ability to update list content via a ListContent.version field ([a26ed22](https://github.com/georgejecook/maestro-roku/commit/a26ed22795219f83c2d338fee51fb9b2688b087f))
* allows multi fields for createSGNode ([c329165](https://github.com/georgejecook/maestro-roku/commit/c329165480b9b1f063c0748e5e1adecf15509eac))
* make state available on screen, and add dismiss api ([9a90a26](https://github.com/georgejecook/maestro-roku/commit/9a90a262e8f302c4978b0aee507c7a7294620d5a))
* **ml:** Improves component reuse - list now uses component pools for all rows, and better handles recycling of resources when updating content. ([9d2fb25](https://github.com/georgejecook/maestro-roku/commit/9d2fb25bab47487a73d2b1728f6b7ee2cdca2d19))
* **view:** adds focusedControl to BaseView, so that node class based screens can easily track what view is focused by them ([558195b](https://github.com/georgejecook/maestro-roku/commit/558195bb52deca043543eda940486426c6c9eb69))



## [0.15.1](https://github.com/georgejecook/maestro-roku/compare/0.15.0...0.15.1) (2021-06-26)


### Bug Fixes

* addresses crash when component can't instantiate a component ([8fcb8cb](https://github.com/georgejecook/maestro-roku/commit/8fcb8cb60160be3c88a69ce4eb9b16cfd5949aec))
* do not repeat scroll to row if finishing an animated scroll ([f6c6fe0](https://github.com/georgejecook/maestro-roku/commit/f6c6fe0335ebc62b47bc88db35f4b16aede4f95b))
* ensure that cell index is set on rows ([0d10f6b](https://github.com/georgejecook/maestro-roku/commit/0d10f6b300fbbdeb55eb147a105b265f3ccb2315))
* fix out of scope classname crashing due to invalid from string return value ([e79bb09](https://github.com/georgejecook/maestro-roku/commit/e79bb09dcfecf1a552b63f0d00374d23dce559b6))
* fix some focus issues, and try to minimize focus updates when long scrolling ([aaeac52](https://github.com/georgejecook/maestro-roku/commit/aaeac52e44ce046a6ad4985c040722a0be859904))
* fixes wrong values in size animation ([adce924](https://github.com/georgejecook/maestro-roku/commit/adce924b310793a7716e50a83bad045264cfe1d0))
* get the content type from the return headers, not the send headers ([8e3c049](https://github.com/georgejecook/maestro-roku/commit/8e3c04963e0d4e3f82d1785a6227078ebbf4d361))
* improves over-zealous key capture ([7c1912e](https://github.com/georgejecook/maestro-roku/commit/7c1912e40a457c535c0040c9718dae3f39c0eee5))
* minor doc tweak for multiContainer ([2a79dfc](https://github.com/georgejecook/maestro-roku/commit/2a79dfc082d3122081f5420f95dbbed0b66edab7))
* minor imporvements to cell tracker and componentpool ([6a9a857](https://github.com/georgejecook/maestro-roku/commit/6a9a85761bca5fe2648c06e78642141904de4db1))
* request correctly interperets response header content type when charset/other text is present ([73ae434](https://github.com/georgejecook/maestro-roku/commit/73ae434e135403f8eb2cb21d04498f84ba9f7f07))


### Features

* add stack trace printer ([1ba3b9c](https://github.com/georgejecook/maestro-roku/commit/1ba3b9c5a45502ab245a2d16ef0ae16c1efbee1e))
* adds local build target, and disables maps for distributed package ([f935bdc](https://github.com/georgejecook/maestro-roku/commit/f935bdccb417c44495d92efa37e652198a428ee6))
* adds new focus hook for child lost focus, and better filters out noise from isChildFocused getting set and unset on parent chain ([61ce068](https://github.com/georgejecook/maestro-roku/commit/61ce068324892c5e50769e95d9cc596f0c3127d2))
* adds new list settings to control how a whole list is rendered, so it can be done in async batches to not hold up the render thread ([276e8c6](https://github.com/georgejecook/maestro-roku/commit/276e8c60a35484ed8c47066f18f71fb55d94ff51))
* adds new mixin api for easiliy creating custom rows ([4f0eeb3](https://github.com/georgejecook/maestro-roku/commit/4f0eeb3607dba99d55836c61e33b612ac4a6c498))
* better api for jumping to rows/items ([b604bc9](https://github.com/georgejecook/maestro-roku/commit/b604bc9b053d85b8a1814e539d5f755cace4b40c))
* component pool now sets isPrebaked on prebaked cells, so they can decide to create vies early ([df34c1b](https://github.com/georgejecook/maestro-roku/commit/df34c1b6b4eb253524d7238c35f6dff6ce7ebb8f))
* import maestro-roku-list into maestro-roku ([90f8339](https://github.com/georgejecook/maestro-roku/commit/90f83393fe1bb73670065d382a01ddf5cd0fb466))



# [0.13.0](https://github.com/georgejecook/maestro-roku/compare/0.12.1...0.13.0) (2021-05-31)


### Features

* adds visibility group to facilitate simple selecting of sub views, without a dynamic container ([2626483](https://github.com/georgejecook/maestro-roku/commit/2626483e521facaea3377f09f8d2876149270f72))
* overhauls network code, testing everything, making the code more readable and easier to work with, and fixing some bugs ([55dd528](https://github.com/georgejecook/maestro-roku/commit/55dd5289937f39131d1a8fbbca6a5fe76a1c9dce))



## [0.12.1](https://github.com/georgejecook/maestro-roku/compare/0.12.0...0.12.1) (2021-05-27)


### Bug Fixes

* fixes crash in baseview ([5f0a363](https://github.com/georgejecook/maestro-roku/commit/5f0a3635efd8cde9c7f57cea43ef62d9c023041b))



# [0.12.0](https://github.com/georgejecook/maestro-roku/compare/0.11.2...0.12.0) (2021-05-27)


### Bug Fixes

* Fixes missing onFirsTShow ([ad7eb8b](https://github.com/georgejecook/maestro-roku/commit/ad7eb8b444e0ad19a28d316c8a6542b02f674cc8))



## [0.11.2](https://github.com/georgejecook/maestro-roku/compare/0.11.3...0.11.2) (2021-05-24)


### Bug Fixes

* makes fixes to component pool ([f176c25](https://github.com/georgejecook/maestro-roku/commit/f176c25711d4cc89dcb1c028ef0172d937da4d76))



# [0.11.0](https://github.com/georgejecook/maestro-roku/compare/0.10.4...0.11.0) (2021-05-21)


### Features

* **core:** Adds DelayedTaskManager, for supporting delayed tasks ([08287d9](https://github.com/georgejecook/maestro-roku/commit/08287d98247e6dbbacd4d4906845b180d8c2338b))
* **core:** adds simpleserializable support to registry, allowing for registry data to be read/written straight from/into classes and nodes ([e37b119](https://github.com/georgejecook/maestro-roku/commit/e37b1196f78e7c4706fe4adb17753f75a8aaff48))



## [0.10.4](https://github.com/georgejecook/maestro-roku/compare/0.10.3...0.10.4) (2021-05-19)



## [0.10.3](https://github.com/georgejecook/maestro-roku/compare/0.10.2...0.10.3) (2021-05-19)


### Bug Fixes

* Fixes issue with FadeTransition not cross fading ([85ed171](https://github.com/georgejecook/maestro-roku/commit/85ed1710428660e3c97c4c2695b691f769cbcab6))



## [0.10.2](https://github.com/georgejecook/maestro-roku/compare/0.10.1...0.10.2) (2021-05-18)



## [0.10.1](https://github.com/georgejecook/maestro-roku/compare/0.10.0...0.10.1) (2021-05-18)


### Bug Fixes

* reset local mioc container when calling reset, or unit testing can get whacky ([8807a56](https://github.com/georgejecook/maestro-roku/commit/8807a56f6ae225361fe16bf6d5d1dfd7fdf8b805))
* use latest maestro-roku-bsc-plugin ([773d3eb](https://github.com/georgejecook/maestro-roku/commit/773d3eb769aeba2e9c36b0ac6aa589d00cf511f5))



# [0.10.0](https://github.com/georgejecook/maestro-roku/compare/0.9.6...0.10.0) (2021-05-18)


### Bug Fixes

* minor code re-structure to optimize callback execution ([6ff4874](https://github.com/georgejecook/maestro-roku/commit/6ff48749522d6d4ac0dbe31f4baae40439e55668))


### Features

* stylemananger supports nested styles using values with ~key.path ([d530430](https://github.com/georgejecook/maestro-roku/commit/d530430af816fda488df5e82a230647ef78b2e0e))



## [0.9.6](https://github.com/georgejecook/maestro-roku/compare/0.9.5...0.9.6) (2021-05-17)



## [0.9.5](https://github.com/georgejecook/maestro-roku/compare/0.9.4...0.9.5) (2021-05-13)



## [0.9.3](https://github.com/georgejecook/maestro-roku/compare/0.9.2...0.9.3) (2021-05-12)


### Features

* can set fields on any node via virtual fields property ([c45e1c5](https://github.com/georgejecook/maestro-roku/commit/c45e1c5f59a5d8e78f4fa967ab9b5ad31de5254c))



## [0.9.2](https://github.com/georgejecook/maestro-roku/compare/0.9.1...0.9.2) (2021-05-06)


### Bug Fixes

* **Collections:** Fixes crash in getItemAtOffset ([7f78610](https://github.com/georgejecook/maestro-roku/commit/7f786106a62deaae53c24629f09e9e53c5a57d84))
* **mvvm:** Fixes state not being bindable ([680fddc](https://github.com/georgejecook/maestro-roku/commit/680fddce91c3815c2ba80515f0826b739b9cc9db))
* **Tasks:** Fixes crashes in task cleanup ([6f7aae6](https://github.com/georgejecook/maestro-roku/commit/6f7aae695ce944f0dd3d6618b9fc5f40e797619a))
* **transitions:** Fix crash on FadeTransition ([97752c2](https://github.com/georgejecook/maestro-roku/commit/97752c25031aaa0124b5ca6cfbf43af724dc1165))


### Features

* **core:** Adds ability to disable index path refs, as that causes issues for some vendors (they use ints as aa keys!!) ([03d098f](https://github.com/georgejecook/maestro-roku/commit/03d098f6fda134386e0b046fa49d9ee56c112554))
* **TabChildScreen:** Allow configuring of remove from aggregate view behaviour in TabChildScreen ([fc5e7f8](https://github.com/georgejecook/maestro-roku/commit/fc5e7f8260cb6162d1f755d4b65d827a651de4a3))



## [0.9.1](https://github.com/georgejecook/maestro-roku/compare/0.9.0...0.9.1) (2021-05-03)


### Features

* adds jumpToItem to keyboard ([63159e5](https://github.com/georgejecook/maestro-roku/commit/63159e58115a013f1539d651ab04e697fb8faf1f))



# [0.9.0](https://github.com/georgejecook/maestro-roku/compare/0.8.1...0.9.0) (2021-04-29)


### Bug Fixes

* **core:** fixes state on base class ([70a00de](https://github.com/georgejecook/maestro-roku/commit/70a00de7ad56d03a30cbbff4e3d884d4b0f7672e))


### Features

* **mvvm:** Base view will call vm init, which allows for better lifecycle coordination ([2ef63ab](https://github.com/georgejecook/maestro-roku/commit/2ef63ab74ef2422867d4288676df9de452604d2a))



## [0.8.1](https://github.com/georgejecook/maestro-roku/compare/0.8.0...0.8.1) (2021-04-28)



# [0.8.0](https://github.com/georgejecook/maestro-roku/compare/0.7.5...0.8.0) (2021-04-28)


### Bug Fixes

* **FontManager:** Do not use -1 as default size ([5b8cd34](https://github.com/georgejecook/maestro-roku/commit/5b8cd34d7e4f2524ecbc3b5a55b8f5c59bb0edd9))


### Features

* **core:** BaseView initialize moved to BaseClass and will wire up nodeclass observers if necessary ([f3ac243](https://github.com/georgejecook/maestro-roku/commit/f3ac24308de5c586207076a9a105c3659596718b))



## [0.7.5](https://github.com/georgejecook/maestro-roku/compare/0.7.4...0.7.5) (2021-04-26)


### Bug Fixes

* **AggregateViews:** Fixes issue that caused crash on popping nav controller view ([89d3655](https://github.com/georgejecook/maestro-roku/commit/89d3655042d2cca7b8ac7bc747ed5f4a430eb915))
* **FontManager:** fixes issue that broke system fonts ([6cc8b9f](https://github.com/georgejecook/maestro-roku/commit/6cc8b9f5481d4772ce7e2cd76d92af434203d73b))



## [0.7.4](https://github.com/georgejecook/maestro-roku/compare/0.7.2...0.7.4) (2021-04-26)



## [0.7.2](https://github.com/georgejecook/maestro-roku/compare/0.7.1...0.7.2) (2021-04-26)


### Bug Fixes

* **aggregateViews:** Fixes auto focus being ignored for aggregate views in focus ([70aa390](https://github.com/georgejecook/maestro-roku/commit/70aa39011ea5cedd988cd1e6586ce0d06226841e))



## [0.7.1](https://github.com/georgejecook/maestro-roku/compare/0.6.7...0.7.1) (2021-04-26)


### Bug Fixes

* **AggregateScreens:** Fixes auto focus issues ([db303be](https://github.com/georgejecook/maestro-roku/commit/db303be9cc328b68ccc2a9a599a55c44ddd68495))
* **core:** Udates to latest maestro plugin, which automatically sets up m vars for all views with ids ([2004a9d](https://github.com/georgejecook/maestro-roku/commit/2004a9db28773c0c0c5efdaf2e622a62b47b3561))
* **Tasks:** Fixes node fields not always getting set on bindings ([a18142c](https://github.com/georgejecook/maestro-roku/commit/a18142cf84f90bf904ff47cf1ed697152e0df724))


### Features

* **flyweight:** Adds cell tracker and component pool, for flyweight goodness ([b603785](https://github.com/georgejecook/maestro-roku/commit/b603785cd453e54b8d14d0b63fc76dc74de0bf65))



## [0.6.7](https://github.com/georgejecook/maestro-roku/compare/0.6.6...0.6.7) (2021-04-22)



## [0.6.6](https://github.com/georgejecook/maestro-roku/compare/0.6.5...0.6.6) (2021-04-22)



## [0.6.5](https://github.com/georgejecook/maestro-roku/compare/0.6.4...0.6.5) (2021-04-22)



## [0.6.4](https://github.com/georgejecook/maestro-roku/compare/0.6.3...0.6.4) (2021-04-22)



## [0.6.3](https://github.com/georgejecook/maestro-roku/compare/0.6.2...0.6.3) (2021-04-22)


### Bug Fixes

* **BaseTransition:** fixes bad progress field ([1dfdb6c](https://github.com/georgejecook/maestro-roku/commit/1dfdb6c3ede55a6a5fac49e920061f28bfbf46e9))



## [0.6.2](https://github.com/georgejecook/maestro-roku/compare/0.6.1...0.6.2) (2021-04-21)


### Bug Fixes

* **BaseView:** do not send key press after accepted long press ([7240806](https://github.com/georgejecook/maestro-roku/commit/724080605b83a62cbef548806db00c11995a400b))



## [0.6.1](https://github.com/georgejecook/maestro-roku/compare/0.6.0...0.6.1) (2021-04-17)



# [0.6.0](https://github.com/georgejecook/maestro-roku/compare/0.5.0...0.6.0) (2021-04-17)


### Bug Fixes

* **BaseCell:** Harden basecell ([6913a49](https://github.com/georgejecook/maestro-roku/commit/6913a492a21b0631e283a9364ae858de5a763408))
* **collections:** changes function names that collide with sg api names ([0b89aee](https://github.com/georgejecook/maestro-roku/commit/0b89aee181edc3aff915bb2fd121dd1512e356f5))



# [0.5.0](https://github.com/georgejecook/maestro-roku/compare/0.4.4...0.5.0) (2021-03-31)



## [0.4.4](https://github.com/georgejecook/maestro-roku/compare/0.4.3...0.4.4) (2021-03-09)



## [0.4.2](https://github.com/georgejecook/maestro-roku/compare/0.4.1...0.4.2) (2021-03-02)


### Bug Fixes

* Fixes incorrect references to tab controller ([4d781e6](https://github.com/georgejecook/maestro-roku/commit/4d781e6e9b1af6c4040b14a6b74d83897ae0d52d))



## [0.4.1](https://github.com/georgejecook/maestro-roku/compare/0.4.0...0.4.1) (2021-03-01)



# [0.4.0](https://github.com/georgejecook/maestro-roku/compare/0.3.5...0.4.0) (2021-03-01)



## [0.3.5](https://github.com/georgejecook/maestro-roku/compare/0.2.1...0.3.5) (2021-02-25)



## [0.2.1](https://github.com/georgejecook/maestro-roku/compare/0.2.0...0.2.1) (2021-02-24)



# [0.2.0](https://github.com/georgejecook/maestro-roku/compare/0.1.1...0.2.0) (2021-02-24)



## 0.1.1 (2021-02-24)


