class DeliveryModel {
  final String updatedAt;
  final String id;
  final ClientModel client;
  final List<DeliveryItemModel> deliveryList;
  final String descriptionDelivery;
  String status;
  String? signature;
  final String createdAt;
  final int v;

  DeliveryModel({
    required this.updatedAt,
    required this.id,
    required this.client,
    required this.deliveryList,
    required this.descriptionDelivery,
    required this.status,
    this.signature,
    required this.createdAt,
    required this.v,
  });

  factory DeliveryModel.fromJson(Map<String, dynamic> json) {
    return DeliveryModel(
      updatedAt: json['updatedAt'],
      id: json['_id'],
      client: ClientModel.fromJson(json['client']),
      deliveryList: List<DeliveryItemModel>.from(
        json['deliveryList'].map((item) => DeliveryItemModel.fromJson(item)),
      ),
      descriptionDelivery: json['descriptionDelivery'],
      status: json['status'],
      signature: json['signature'],
      createdAt: json['createdAt'],
      v: json['__v'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'updatedAt': updatedAt,
      '_id': id,
      'client': client.toJson(),
      'deliveryList': deliveryList.map((item) => item.toJson()).toList(),
      'descriptionDelivery': descriptionDelivery,
      'status': status,
      'signature': signature,
      'createdAt': createdAt,
      '__v': v,
    };
  }

  DeliveryModel update({
    String? status,
    String? signature,
  }) {
    return DeliveryModel(
      updatedAt: this.updatedAt,
      id: this.id,
      client: this.client,
      deliveryList: this.deliveryList,
      descriptionDelivery: this.descriptionDelivery,
      status: status ?? this.status,
      signature: signature ?? this.signature,
      createdAt: this.createdAt,
      v: this.v,
    );
  }
}

class ClientModel {
  final String id;
  final String name;
  final String cnpj;
  final String address;
  final String district;
  final int number;
  final String complement;
  final String referencePoint;

  ClientModel({
    required this.id,
    required this.name,
    required this.cnpj,
    required this.address,
    required this.district,
    required this.number,
    required this.complement,
    required this.referencePoint,
  });

  factory ClientModel.fromJson(Map<String, dynamic> json) {
    return ClientModel(
      id: json['_id'],
      name: json['name'],
      cnpj: json['cnpj'],
      address: json['address'],
      district: json['district'],
      number: json['number'],
      complement: json['complement'],
      referencePoint: json['referencePoint'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id': id,
      'name': name,
      'cnpj': cnpj,
      'address': address,
      'district': district,
      'number': number,
      'complement': complement,
      'referencePoint': referencePoint,
    };
  }
}

class DeliveryItemModel {
  final int qtd;
  final String product;

  DeliveryItemModel({
    required this.qtd,
    required this.product,
  });

  factory DeliveryItemModel.fromJson(Map<String, dynamic> json) {
    return DeliveryItemModel(
      qtd: json['qtd'],
      product: json['product'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'qtd': qtd,
      'product': product,
    };
  }
}
