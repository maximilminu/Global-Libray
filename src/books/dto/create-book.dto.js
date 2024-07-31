"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
var class_validator_1 = require("class-validator");
var CreateBookDto = function () {
    var _a;
    var _id_publisher_decorators;
    var _id_publisher_initializers = [];
    var _id_publisher_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _category_extraInitializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _price_extraInitializers = [];
    var _release_date_decorators;
    var _release_date_initializers = [];
    var _release_date_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _authorIds_decorators;
    var _authorIds_initializers = [];
    var _authorIds_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateBookDto() {
                this.id_publisher = __runInitializers(this, _id_publisher_initializers, void 0);
                this.title = (__runInitializers(this, _id_publisher_extraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.category = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _category_initializers, void 0));
                this.price = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _price_initializers, void 0));
                this.release_date = (__runInitializers(this, _price_extraInitializers), __runInitializers(this, _release_date_initializers, void 0));
                this.description = (__runInitializers(this, _release_date_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.authorIds = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _authorIds_initializers, void 0));
                __runInitializers(this, _authorIds_extraInitializers);
            }
            return CreateBookDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_publisher_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _title_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _category_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _price_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
            _release_date_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsNotEmpty)()];
            _description_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _authorIds_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _id_publisher_decorators, { kind: "field", name: "id_publisher", static: false, private: false, access: { has: function (obj) { return "id_publisher" in obj; }, get: function (obj) { return obj.id_publisher; }, set: function (obj, value) { obj.id_publisher = value; } }, metadata: _metadata }, _id_publisher_initializers, _id_publisher_extraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
            __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
            __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } }, metadata: _metadata }, _price_initializers, _price_extraInitializers);
            __esDecorate(null, null, _release_date_decorators, { kind: "field", name: "release_date", static: false, private: false, access: { has: function (obj) { return "release_date" in obj; }, get: function (obj) { return obj.release_date; }, set: function (obj, value) { obj.release_date = value; } }, metadata: _metadata }, _release_date_initializers, _release_date_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _authorIds_decorators, { kind: "field", name: "authorIds", static: false, private: false, access: { has: function (obj) { return "authorIds" in obj; }, get: function (obj) { return obj.authorIds; }, set: function (obj, value) { obj.authorIds = value; } }, metadata: _metadata }, _authorIds_initializers, _authorIds_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateBookDto = CreateBookDto;
