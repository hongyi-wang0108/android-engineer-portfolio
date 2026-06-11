export type Metric = {
  label: string;
  value: string;
  description?: string;
};

export type Project = {
  slug: string;
  group: "core" | "personal";
  title: string;
  subtitle: string;
  tags: string[];
  metrics: Metric[];
  overview: string;
  background: string;
  problem: string[];
  myRole?: string;
  technicalApproach: string[];
  diagram: string;
  result: string;
  learned?: string;
  relatedSkills: string[];
  whyBuilt?: string;
  mainFeatures?: string[];
  statusList?: string[];
  interviewPurpose?: string;
};

export const projects: Project[] = [
  {
    slug: "imsdk-stability",
    group: "core",
    title: "IMSDK障害分析基盤の構築",
    subtitle: "客訴対応から、再利用可能な障害分析フローへ",
    tags: ["Android", "SDK", "Logging", "Stability", "Troubleshooting", "Cross-team"],
    metrics: [
      { label: "CS一次判断率", value: "33% -> 53%" },
      { label: "Team月間工数", value: "5.1 -> 2.0" },
      { label: "調査効率", value: "原因特定時間を短縮" }
    ],
    overview:
      "IMSDKにおけるAndroidユーザーからの問い合わせ対応において、原因特定に時間がかかる状態を改善するため、エラー分類、ログ設計、内部調査ツール、SOPを整備しました。",
    background:
      "ユーザーからメッセージ送受信に関する問い合わせが発生した際、CS、QA、Android、Backend、長接続、風控など複数チームの確認が必要でした。当時はエラー原因の分類が十分に統一されておらず、調査担当者によって確認手順が異なるため、同じような調査が繰り返されていました。",
    problem: [
      "Android側で取得できるログが不足していた",
      "エラー原因の分類が統一されていなかった",
      "CSやQAが一次判断できず、Androidチームへの問い合わせが集中していた"
    ],
    myRole:
      "Android側のログ設計、errorReason / errorCode の分類設計、SDK内の各フェーズへの埋め込み、調査フロー整理を担当しました。また、QA、CS、Backendチームと連携し、問い合わせ時に確認すべき項目をSOPとしてドキュメント化しました。",
    technicalApproach: [
      "メッセージ送信処理を入庫、前処理、アップロード、送信、サーバー応答、クライアント表示のフェーズに分解しました。",
      "各フェーズで errorReason と errorCode を付与し、内部調査ツールから確認できるようにしました。",
      "CS / QA が一次確認できるチェック項目を整理し、再利用可能な調査フローへ落とし込みました。"
    ],
    diagram:
      "User Report\n  -> CS / QA Check\n  -> Internal Troubleshooting Tool\n  -> errorReason / errorCode\n  -> Android SDK Logs\n  -> Root Cause Classification\n  -> SOP-based Response",
    result:
      "CSが一次判断できるケースが増え、Androidチームへの調査依頼が減少しました。CS一次判断率は 33% から 53% に改善し、Team月間工数は 5.1 から 2.0 に削減されました。",
    learned:
      "障害対応では単にバグを修正するだけでなく、原因を分類し、再現性のある調査フローを作ることが重要だと学びました。",
    relatedSkills: ["Android SDK", "Java / Kotlin", "Logging Design", "Error Classification", "Troubleshooting", "SOP"]
  },
  {
    slug: "login-platform",
    group: "core",
    title: "TV向けログイン基盤の刷新",
    subtitle: "単一ログイン方式から、拡張可能なログイン基盤へ",
    tags: ["Android TV", "Login", "Architecture", "Refactoring", "UX"],
    metrics: [
      { label: "ログイン率", value: "13.2% -> 17.5%" },
      { label: "改善幅", value: "+4.3pt" },
      { label: "拡張性", value: "ログイン方式追加を容易化" }
    ],
    overview:
      "TV向けAndroidアプリにおいて、ログイン方式が限定的であり、新しいログイン導線や半屏ログインなどの拡張が難しい状態を改善しました。",
    background:
      "既存のログイン機能は特定のログイン方式に依存しており、微信扫码、快捷登录、前回アカウント表示、半屏ログインなどの新しい要求に対応しづらい状態でした。",
    problem: [
      "ログイン方式の追加コストが高い",
      "ログインシーンごとの処理が分散している",
      "ポップアップ表示の優先度管理が難しい",
      "半屏ログインなど新しい体験に対応しづらい"
    ],
    myRole:
      "Android側のログイン画面実装、ログイン方式追加、ログインシーン整理、ポップアップ優先度制御、リリース対応を担当しました。",
    technicalApproach: [
      "ログイン処理を「ログイン方式」と「ログインシーン」に分けて整理しました。",
      "QR Login、Phone Login、WeChat Login、Quick Login、Last Account Login などを戦略として扱える構造にしました。",
      "Full Screen、Half Screen、Silent Login、Popup Triggered Login などのシーン別に表示制御を整理しました。"
    ],
    diagram:
      "LoginSceneManager\n  -> LoginStrategy\n      -> QRLoginStrategy\n      -> PhoneLoginStrategy\n      -> WeChatLoginStrategy\n      -> QuickLoginStrategy\n      -> LastAccountLoginStrategy\nPopupPriorityManager\n  -> Login Entry",
    result:
      "ログイン導線の改善により、ログイン率は 13.2% から 17.5% に改善しました。また、ログイン方式とログインシーンを整理したことで、実装・テスト・保守がしやすくなりました。",
    learned:
      "ユーザー体験を改善するためには、単にUIを追加するだけでなく、将来的な拡張を考えた基盤設計が重要だと学びました。",
    relatedSkills: ["Android TV", "Login Flow", "Architecture", "Refactoring", "Popup Priority", "QA Collaboration"]
  },
  {
    slug: "network-optimization",
    group: "core",
    title: "ネットワーク通信コスト最適化",
    subtitle: "Brotli辞書圧縮と上行パラメータ削減による通信量削減",
    tags: ["Network", "Performance", "Brotli", "Cost Optimization", "Fallback", "Gradual Release"],
    metrics: [
      { label: "対象API帯域", value: "約61%削減" },
      { label: "ピーク帯域", value: "208.1Gbps -> 81Gbps" },
      { label: "上行通信", value: "300Gbps -> 282Gbps" }
    ],
    overview:
      "下行通信のBrotli辞書圧縮と上行パラメータ削減を通じて、Android側から通信コスト最適化に取り組みました。",
    background:
      "サービス規模が大きくなるにつれ、一部APIのレスポンスサイズやログ送信量が大きくなり、通信帯域とCDNコストの増加が課題となっていました。",
    problem: [
      "対象APIのレスポンスサイズが大きい",
      "上行ログに不要または重複した共通パラメータが含まれている",
      "圧縮導入時の互換性リスクがある",
      "失敗時にサービス影響を出さないfallback設計が必要"
    ],
    myRole:
      "Android側の圧縮対応、md5検証、fallback処理、上行パラメータ削減、ABテスト確認、段階的リリース対応を担当しました。",
    technicalApproach: [
      "対象APIに対してBrotli辞書圧縮を導入し、クライアント側で圧縮レスポンスを受信しました。",
      "md5 による整合性確認と、解凍失敗時の fallback を実装しました。",
      "ログ系リクエストに含まれる共通パラメータを見直し、不要な項目を削減しました。"
    ],
    diagram:
      "Client Request\n  -> Server Response with Brotli Dictionary Compression\n  -> Android Client\n      -> Verify md5\n      -> Decompress\n      -> Use Optimized Data\n      -> Fallback if Failed",
    result:
      "対象APIの帯域は約61%削減され、ピーク帯域は 208.1Gbps から 81Gbps に低下しました。上行ログ系通信についても、平均 300Gbps から 282Gbps へ削減されました。",
    learned:
      "Android開発でもサービス全体の運用コストに貢献できることを学びました。性能改善では検証、fallback、段階的リリース、関係チームとの合意形成が重要でした。",
    relatedSkills: ["OkHttp", "Network Optimization", "Brotli", "Performance", "Fallback", "AB Test", "Gradual Release"]
  },
  {
    slug: "tv-ui-abtest",
    group: "core",
    title: "TVアプリUI改善とA/Bテスト",
    subtitle: "ユーザー行動データに基づく体験改善",
    tags: ["Android TV", "UI", "A/B Test", "UX", "Data-driven"],
    metrics: [
      { label: "DAU", value: "+0.22%" },
      { label: "平均視聴時間", value: "+0.72%" },
      { label: "カードクリック率", value: "+14.04%" }
    ],
    overview: "TV向けAndroidアプリにおいて、ユーザー行動データに基づき、UI改善とA/Bテストを実施しました。",
    background:
      "TVアプリでは、リモコン操作、フォーカス移動、画面距離などを考慮したUI設計が必要です。ユーザーがコンテンツを見つけやすく、操作しやすいUIを目指しました。",
    problem: [
      "コンテンツ導線の改善余地がある",
      "リモコン操作時のフォーカス体験が重要",
      "UI変更による効果をデータで検証する必要がある"
    ],
    myRole:
      "Android TV側のUI実装、フォーカス制御、A/Bテスト実装、リリース対応を担当しました。",
    technicalApproach: [
      "リモコン操作に適したフォーカス制御を実装しました。",
      "カードUIの表示改善と画面遷移の整理を行いました。",
      "A/Bテストと灰度リリースにより、リスクを抑えながら効果を確認しました。"
    ],
    diagram:
      "User Behavior Data\n  -> UI Hypothesis\n  -> Android TV Implementation\n  -> Focus Control\n  -> A/B Test\n  -> Gradual Release\n  -> Result Analysis",
    result:
      "A/Bテストの結果、DAUは +0.22%、平均視聴時間は +0.72%、カードクリック率は +14.04% 改善しました。",
    learned:
      "UI改善では見た目だけでなく、ユーザー行動データに基づいて効果を検証することが重要だと学びました。",
    relatedSkills: ["Android TV", "UI Implementation", "Focus Control", "A/B Test", "Data-driven Development"]
  },
  {
    slug: "pr-timeline-tracker",
    group: "personal",
    title: "Japan PR Timeline Tracker",
    subtitle: "永住申請の進捗・予測管理アプリ",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Coroutines", "Hilt", "Material 3"],
    metrics: [
      { label: "Focus", value: "Modern Android" },
      { label: "Architecture", value: "MVVM" },
      { label: "Storage", value: "Room" }
    ],
    overview:
      "日本で永住申請を行う外国人向けに、申請日、審査ステータス、追加資料提出日などを記録し、進捗を管理できるAndroidアプリです。",
    whyBuilt:
      "日本で生活する外国人にとって、永住申請は重要なライフイベントですが、審査期間が長く、現在の進捗や次に必要な対応を管理しづらいという課題があります。",
    background:
      "申請状況を整理し、不安を減らすためのアプリとして設計しました。業務経験に加えて、Modern Android 技術スタックを実践的に学ぶ目的もあります。",
    problem: [
      "申請日、追加資料提出日、審査ステータスが分散しやすい",
      "長期審査中に次の対応を忘れやすい",
      "Modern Android の実装経験を面接で説明できる形にしたい"
    ],
    technicalApproach: [
      "UIは Jetpack Compose、状態管理は ViewModel + StateFlow を使用します。",
      "データ保存には Room、非同期処理には Kotlin Coroutines、DIには Hilt を使用します。",
      "申請ステータス、メモ、通知リマインダーをローカル保存中心で管理します。"
    ],
    diagram: "Compose UI\n  -> ViewModel\n  -> UseCase\n  -> Repository\n  -> Room Database",
    result:
      "現在、日本でのAndroidエンジニア転職に向けて、Modern Android 技術スタックを用いた個人開発として継続的に改善しています。",
    mainFeatures: ["申請日登録", "現在ステータス管理", "追加資料提出日の記録", "審査期間の目安表示", "メモ機能", "通知リマインダー", "ローカル保存"],
    statusList: ["受付済み", "審査中", "追加資料依頼", "追加資料提出済み", "結果待ち", "許可", "不許可"],
    interviewPurpose:
      "業務で経験したAndroid開発スキルに加え、Jetpack Compose、MVVM、Room、Hilt、Coroutinesなどを実践的に学習することを目的としています。",
    relatedSkills: ["Jetpack Compose", "MVVM", "ViewModel", "StateFlow", "Room", "Coroutines", "Hilt", "Material 3"]
  }
];

export const coreProjects = projects.filter((project) => project.group === "core");
export const personalProjects = projects.filter((project) => project.group === "personal");

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
